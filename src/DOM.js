const DOMNodes = {
  body: document.querySelector('body'),
  divRoot: document.createElement('div'),
  divTitleBar: document.createElement('div'),
  divTitle: document.createElement('div'),
  divSideBar: document.createElement('div'),
  divMenu: document.createElement('div'),
  divProjectList: document.createElement('div'),
  divContent: document.createElement('div'),
  divToDoList: document.createElement('div'),
}

function setUpInitHTML() {
  //add labels to elements
  DOMNodes.divRoot.setAttribute('id', 'divRoot')
  DOMNodes.divTitleBar.setAttribute('id', 'divTitleBar')
  DOMNodes.divTitle.setAttribute('id', 'divTitle')
  DOMNodes.divSideBar.setAttribute('id', 'divSideBar')
  DOMNodes.divMenu.setAttribute('id', 'divMenu')
  DOMNodes.divProjectList.setAttribute('id', 'divProjectList')
  DOMNodes.divContent.setAttribute('id', 'divContent')
  DOMNodes.divToDoList.setAttribute('id', 'divToDoList')

  //setup HTML structure
  DOMNodes.divTitleBar.appendChild(DOMNodes.divTitle)
  DOMNodes.divRoot.appendChild(DOMNodes.divTitleBar)

  DOMNodes.divSideBar.appendChild(DOMNodes.divMenu)
  DOMNodes.divSideBar.appendChild(DOMNodes.divProjectList)
  DOMNodes.divRoot.appendChild(DOMNodes.divSideBar)

  DOMNodes.divContent.appendChild(DOMNodes.divToDoList)
  DOMNodes.divRoot.appendChild(DOMNodes.divContent)

  DOMNodes.body.appendChild(DOMNodes.divRoot)
}

export { setUpInitHTML }
