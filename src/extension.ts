import * as vscode from 'vscode';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { WeatherTreeProvider } from './WeatherTree';
import { NewsTreeProvider } from './NewsTree';

dotenv.config({ path: path.join(__filename, '..', '..', '.env') });

interface IClickableTreeItem extends vscode.TreeItem {
  handleItemClicked: () => void;
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

  activateWeather();
  activateNews();
}
