import * as vscode from 'vscode';
import * as path from 'path';
import { WEATHER_TYPES } from './constants';

class WeatherTree extends vscode.TreeItem {
  constructor(label: string, { iconName }: { iconName: string }) {
    super(label);

    const makeWeatherIcon = ({ isDarkTheme }: { isDarkTheme: boolean }) => {
      const icon = WEATHER_TYPES.includes(iconName) ? iconName : iconName[0];
      return path.join(
        __filename,
        '..',
        '..',
        '..',
        'assets',
        'weatherIcons',
        isDarkTheme ? 'dark' : 'light',
        `${icon}.svg`
      );
    };

    this.iconPath = {
      light: makeWeatherIcon({ isDarkTheme: false }),
      dark: makeWeatherIcon({ isDarkTheme: true })
    };
  }
}

export default WeatherTree;
