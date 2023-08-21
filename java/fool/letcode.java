package fool;

import java.util.ArrayList;
import java.util.List;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public List<Integer> mergeTwoLists(List<Integer> list1, List<Integer> list2) {
         List<Integer> result = new ArrayList<>();
        for(int i=0; i<list1.size(); i++){
            for(int j=0; j<list2.size(); j++){
                if(list1.get(i)<=list2.get(j)){
                    result.add(list1.get(i));
                    result.add(list2.get(j));
                }else{
                    result.add(list2.get(j));
                    result.add(list1.get(i));
                }
            }
        }

        return result;
    }
}

