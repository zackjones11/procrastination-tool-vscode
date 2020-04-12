import * as vscode from 'vscode';
import { WeatherTree } from './';
import { formatTimestamp } from '../helpers';
import { fetchWeather, IForcast } from '../services';

export class WeatherTreeProvider
  implements vscode.TreeDataProvider<WeatherTree> {
  public async getChildren(): Promise<WeatherTree[]> {
    const weather = await fetchWeather();

    return weather.map((forcast: IForcast) => {
      const date = formatTimestamp(forcast.time);
      const temperature = Math.round(forcast.temperatureHigh);
      const summary = forcast.summary;

      return new WeatherTree(`${date} - ${temperature}° ${summary}`, {
        iconName: forcast.icon
      });
    });
  }

  getTreeItem(item: WeatherTree): vscode.TreeItem {
    return item;
  }
}

export default WeatherTreeProvider;
