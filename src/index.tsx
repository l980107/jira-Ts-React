import ReactDOM from 'react-dom';
import { DevTools, loadServer } from 'jira-dev-tool';
import 'antd/dist/antd.less';
import App from './App';
import { AppProviders } from './context/index';

loadServer(() => {
  ReactDOM.render(
    <AppProviders>
      <DevTools />
      <App />
    </AppProviders>,

    document.getElementById('root'),
  );
});
