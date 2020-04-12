import * as vscode from 'vscode';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { WeatherTreeProvider } from './WeatherTree';
import { NewsTreeProvider } from './NewsTree';

dotenv.config({ path: path.join(__filename, '..', '..', '.env') });

export function activate() {
  vscode.window.registerTreeDataProvider(
    'procrastination-weather',
    new WeatherTreeProvider()
  );

  vscode.window.registerTreeDataProvider(
    'procrastination-news',
    new NewsTreeProvider()
  );

  vscode.commands.registerCommand('extension.procrastination', () => {
    // registered
  });
}
