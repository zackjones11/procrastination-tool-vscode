import * as vscode from 'vscode';
import { NewsTree } from './';

export class NewsTreeProvider implements vscode.TreeDataProvider<NewsTree> {
  public async getChildren(): Promise<NewsTree[]> {
    const news = [
      {
        text: 'fake news'
      }
    ];

    return news.map((info: any) => {
      return new NewsTree(info.text);
    });
  }

  getTreeItem(item: NewsTree): vscode.TreeItem {
    return item;
  }
}

export default NewsTreeProvider;
