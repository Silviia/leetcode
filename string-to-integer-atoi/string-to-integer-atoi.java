class Solution {
    public int myAtoi(String s) {
        int num = 0; // result
        int index = 0;
        
        if (s == null || s.length() == 0) {
            return 0;
        }
        
        // Skip white spaces
        while (index < s.length() && s.charAt(index) == ' ') {
            index++;
        }
        
        // Check for sign
        int sign = 1;
        if (index < s.length() && (s.charAt(index) == '+' || s.charAt(index) == '-')) {
            sign = s.charAt(index) == '+' ? 1 : -1;
            index++;
        }
        
        while (index < s.length() && Character.isDigit(s.charAt(index))) {
            int digit = s.charAt(index) - '0';
            if (num > (Integer.MAX_VALUE - digit) / 10) {  // Check for overflow
                return (sign == 1) ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            num = num * 10 + digit;
            index++;
        }
        
        return sign * num;
    }
}