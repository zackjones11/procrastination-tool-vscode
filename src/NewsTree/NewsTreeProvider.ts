import * as vscode from 'vscode';
import { NewsTree } from './';
import { fetchNews, INewsHeadlines } from '../services';

export class NewsTreeProvider implements vscode.TreeDataProvider<NewsTree> {
  public async getChildren(): Promise<NewsTree[]> {
    const newsHeadlines = await fetchNews();

    return newsHeadlines.map((article: INewsHeadlines) => {
      const item = new NewsTree(article.title, {
        url: article.url
      });

      item.command = {
        command: 'procrastination-news.selectNode',
        title: 'Select Article',
        arguments: [item]
      };

      return item;
    });
  }

  getTreeItem(item: NewsTree): vscode.TreeItem {
    return item;
  }
}

export default NewsTreeProvider;
