import React, { useState } from 'react';
import MainPagelayout from '../MainPagelayout';
import { apiGet } from '../misc/config';
import CustomRadio from '../CustomRadio';

// eslint-disable-next-line no-unused-vars
import Showcard from '../shows/ShowCard';
import ShowGrid from '../shows/ShowGrid';
import ActorGrid from '../actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hook';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';

function Home() {
  const [input, setInput] = useLastQuery();

  const [results, setResults] = useState(null);

  const [searchOption, setSearchOption] = useState('shows');
  const isShowSearch = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onKeyDown = ev => {
    if (ev.key === 'Enter') {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }

    return null;
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  return (
    <MainPagelayout>
      <SearchInput
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />

      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPagelayout>
  );
}

export default Home;
