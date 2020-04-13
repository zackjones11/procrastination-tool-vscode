import * as vscode from 'vscode';
import { NewsTree } from './';
import { fetchNews, INewsHeadlines } from '../services';

export class NewsTreeProvider implements vscode.TreeDataProvider<NewsTree> {
  public async getChildren(): Promise<NewsTree[]> {
    const newsHeadlines = await fetchNews();

    return newsHeadlines.map((article: INewsHeadlines) => {
      return new NewsTree(article.title, {
        url: article.url
      });
    });
  }

  getTreeItem(item: NewsTree): vscode.TreeItem {
    return item;
  }
}

export default NewsTreeProvider;
