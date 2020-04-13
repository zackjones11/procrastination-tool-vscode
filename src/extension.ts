import * as vscode from 'vscode';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { QuoteTreeProvider } from './QuoteTree';
import { WeatherTreeProvider } from './WeatherTree';
import { NewsTreeProvider } from './NewsTree';

dotenv.config({ path: path.join(__filename, '..', '..', '.env') });

interface IClickableTreeItem extends vscode.TreeItem {
  handleItemClicked: () => void;
}

function activateQuote() {
  vscode.window.registerTreeDataProvider(
    'procrastination-quote',
    new QuoteTreeProvider()
  );
}

function activateWeather() {
  vscode.window.registerTreeDataProvider(
    'procrastination-weather',
    new WeatherTreeProvider()
  );
}

function activateNews() {
  const newsTreeProvider = new NewsTreeProvider();

  vscode.window.registerTreeDataProvider(
    'procrastination-news',
    newsTreeProvider
  );

  vscode.commands.registerCommand(
    'procrastination-news.selectNode',
    (item: IClickableTreeItem) => item.handleItemClicked()
  );
}

export function activate() {
  vscode.commands.registerCommand('extension.procrastination', () => {
    // registered activation
  });

  activateQuote();
  activateWeather();
  activateNews();
}
