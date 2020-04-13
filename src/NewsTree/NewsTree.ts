import * as vscode from 'vscode';
import { fetchWebContent } from '../services';

class NewsTree extends vscode.TreeItem {
  url: string;

  constructor(label: string, { url }: { url: string }) {
    super(label);
    this.url = url;
  }

  async handleItemClicked() {
    const identifier = 'view-article';
    const tabTitle = 'News Article';
    const columnSize = vscode.ViewColumn.Two;

    if (!this.url) {
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      identifier,
      tabTitle,
      columnSize
    );

    panel.webview.html = await fetchWebContent(this.url);
  }
}

export default NewsTree;
