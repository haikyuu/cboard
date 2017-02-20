import React, { Component } from 'react';
import Speech from 'speak-tts';

require('../../styles/App.css');

import Board from '../Board';
import Toggle from '../../components/Toggle';
import Switch from '../../components/Switch';
import boardApi from '../../api/boardApi';
import { translationMessages, appLocales, stripRegionCode, navigatorLanguage, normalizeLanguageCode } from '../../i18n';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      edit: false,
      supportedVoices: [],
      selectedLanguage: navigatorLanguage
    };
  }

  componentWillMount() {
    const boards = boardApi.getAllBoards();
    this.setState({ boards });
    function supportedVoice(voice) {
      for (let i = 0; i < appLocales.length; i++) {
        if (appLocales[i] === stripRegionCode(voice.lang)) {
          return true;
        }
      }
      return false;
    }

    function mapVoice(voice) {
      let {name, lang} = voice;
      lang = normalizeLanguageCode(lang);
      const text = `${name} (${lang})`;
      return { value: lang, text };
    }

    Speech.init({
      lang: this.props.language,
      onVoicesLoaded: ({voices}) => {
        let supportedVoices =
          voices
            .filter(supportedVoice)
            .map(mapVoice);
        this.setState({ supportedVoices });
      }
    });

    let supportedVoices =
      window.speechSynthesis.getVoices()
        .filter(supportedVoice)
        .map(mapVoice);
    this.setState({ supportedVoices });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.language !== nextProps.language) {
      const selectedLanguage = nextProps.language;
      this.setState({ selectedLanguage });
    }
  }

  speak = text => {
    Speech.setLanguage(this.state.selectedLanguage);
    Speech.speak({ text });
  }

  onToggleEdit = (event) => {
    const edit = event.target.checked;
    this.setState({ edit });
  }

  render() {
    return (
      <div className="app">
        <div className="app__nav-bar">
          <div className="app__settings">
            <Switch onChange={this.onToggleEdit} />
            <Toggle
              options={this.state.supportedVoices}
              value={this.state.selectedLanguage}
              onToggle={this.props.onLanguageToggle}
            />
          </div>
        </div>
        <div className="app__main">
          <Board
            boards={this.state.boards}
            edit={this.state.edit}
            onOutputChange={this.speak}
            onOutputClick={this.speak}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  language: React.PropTypes.string
};

App.defaultProps = {
  language: 'en-US'
};

export default App;