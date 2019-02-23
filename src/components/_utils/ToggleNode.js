import classlist from 'classlist'

class ToggleNode {
  static END_EVENT = 'transitionend'

  constructor (node, openedClassName, reflowTrigger) {
    this.node = node
    this.openedClassName = openedClassName
    this.reflowTrigger =
      reflowTrigger ||
      (() => {
        // this.node.offsetWidth
      })
    this.node.style.display = 'none'
  }

  open () {
    this.node.style.display = 'block'
    this.reflowTrigger()
    this.openedClassName && classlist(this.node).add(this.openedClassName)
  }

  close (callback) {
    if (classlist(this.node).contains(this.openedClassName)) {
      classlist(this.node).remove(this.openedClassName)
      const onTransitionEnd = () => {
        this.node.style.display = 'none'
        this.node.removeEventListener(ToggleNode.END_EVENT, onTransitionEnd)
        callback && callback()
      }
      this.node.addEventListener(ToggleNode.END_EVENT, onTransitionEnd)
    } else {
      callback && callback()
    }
  }
}

export default ToggleNode
