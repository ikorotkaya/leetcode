var mergeTwoLists = function (a, b) {
  const prevNode = new ListNode(-1);
  let currentNode = prevNode;

  while (a !== null && b !== null) {
    if (a.val < b.val) {
      currentNode.next = a;
      a = a.next;
    } else {
      currentNode.next = b;
      b = b.next;
    }
    currentNode = currentNode.next
  }
  currentNode.next = a == null ? b : a
  return prevNode.next
};