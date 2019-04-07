/*
pipes.vsix: Animated pipes plugin, written by cobaltblu27

Algorithms and specs are from pipes.sh
Original code can be seen in:
https://github.com/pipeseroni/pipes.sh

Copyright (c) 2015-2018 Pipeseroni/pipes.sh contributors
Copyright (c) 2013-2015 Yu-Jie Lin
Copyright (c) 2010 Matthew Simpson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration("pipes-vsix");
  const pipeType = config["sets"][config["pipe-type"]];
  const frameRate = config["framerate"];
  const straightProbability = config["going-straight-probability"];

  const message = vscode.window.showInformationMessage;

  console.log('Congratulations, your extension "pipes-vsix" is now active!');

  const docInit = async (content?: string) => {
    return vscode.workspace
      .openTextDocument({
        language: "text"
      })
      .then(doc => vscode.window.showTextDocument(doc))
      .then(editor => {
        if (content) {
          editor!.edit(editorEdit => {
            editorEdit.replace(editor!.visibleRanges[0], content);
            console.log(editor!.visibleRanges);
          });
        }
        return editor;
      });
  };

  const getNextPipe = ([]) => {
    //TODO
  };

  const render = (content: string, editor: vscode.TextEditor) => {
    editor.edit(editorEdit => {
      editorEdit.replace(editor!.visibleRanges[0], content);
      console.log(editor!.visibleRanges);
    });
  };

  const pipes = async () => {
    vscode.window.showInformationMessage("Hello World!");
    let editor = await docInit("1\n2\n3");
    setTimeout(() => {
      render("1\n2\n3\n4\n5\n6", editor);
    }, 1000);
  };
  context.subscriptions.push(
    vscode.commands.registerCommand("pipes-vsix.pipes", pipes)
  );
}

export function deactivate() {}
