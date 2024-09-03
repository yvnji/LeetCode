/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
 non-decreasing order: 비내림차순 = 오름차순 1,2,3...
 respectivly: 각각
 accommodate: 수용하다
 denote: 나타내다
 
 로직: nums1 뒤쪽공간에 여유가 있기 때문에 두 배열 모두 뒤에서부터 값을 각각 비교하면서 채워넣는다
*/
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // nums1의 유효한 요소의 마지막 인덱스
    let j = n - 1; // nums2의 마지막 인덱스 
    let k = m + n - 1; // 병합된 배열의 마지막 인덱스
    
    while(j >= 0) {
        if(i >= 0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};