// a.Cho mảng số nguyên chưa được sắp xếp. Viết hàm xếp 5 số lớn nhất ra đầu mảng.
// Test case:
// findMax5([3,4,5,3,2,3,10,11]) => [11,10,5,4,3]
// findMax5([14,12,38,17,10,36,12,29,45,34,48,22]) => [48, 45, 38, 36, 34]
// findMax5([10,11,2,30,22,6,8,9,11,12,22]) => [30, 22, 22, 12, 11]

const compare = (a, b) => b - a

const findMax5 = (arr) => {
    return arr.sort(compare).slice(0, 5);
}

// console.log(findMax5([3,4,5,3,2,3,10,11]))
// console.log(findMax5([14,12,38,17,10,36,12,29,45,34,48,22]))
// console.log(findMax5([10,11,2,30,22,6,8,9,11,12,22]))


// b. Viết hàm nhận vào 1 mảng và trả ra phần tử xuất hiện nhiều lần nhất trong mảng.
// Test case: 
// findFrequent([3, 7, 3]) ➞ 3
// findFrequent([null, "hello", true, null]) ➞ null
// findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false


const findFrequent = (arr) => {
    const res = arr.reduce((prev, curr) => {
        !prev[curr] ?  prev[curr] = 1 : prev[curr] = prev[curr] + 1
        return prev
    }, {})
    return Object.keys(res).reduce((a, b) => res[a] > res[b] ? a : b);
}

// console.log(findFrequent([3, 7, 3]))
// console.log(findFrequent([null, "hello", true, null]))
// console.log(findFrequent([false, "up", "down", "left", "right", true, false]))

// 2.Thực hành: Tạo một form liên hệ như mô tả dưới đây
// Gồm các field sau: Họ và Tên, Email, Số điện thoại, Nội dung liên hệ
// Gồm 2 nút button: Submit và Clear; Khi nhấn vào nút submit thì sẽ submit những dữ liệu ở các field lên và lưu vào database; Khi nhấn vào nút Clear thì sẽ xóa hết dữ liệu trong form đi.

const clearBtn = document.querySelector('.btn-clear')
const formContact = document.querySelector('#formContact')

formContact.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    // Flag
    let checked = false
    // Check require    
    for (const [key, value] of Object.entries(formProps)){
        if(value === ''){
            checked = true;
            alert(`Nội dung ${key} không được để trống `)
        }
    }
    if(!checked){
        console.log(formProps)
    }
})

clearBtn.addEventListener('click', (e) => {
    formContact.reset()
})