class Solution {
    public void moveZeroes(int[] nums) {
        int index = 0; // index of non zero elements

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[index++] = nums[i];
            }
        }

        for (int j = index; j < nums.length; j++) {
            nums[j] = 0;
        }
    }
}