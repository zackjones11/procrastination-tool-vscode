import * as vscode from 'vscode';

class NewsTree extends vscode.TreeItem {
  constructor(label: string) {
    super(label);
  }
}

export default NewsTree;
