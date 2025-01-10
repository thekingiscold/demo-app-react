export const options = [
    { value: '1', label: 'Jan' },
    { value: '2', label: 'Feb' },
    { value: '3', label: 'Mar' },
    { value: '4', label: 'Apr' },
    { value: '5', label: 'May' },
    { value: '6', label: 'Jun' },
    { value: '7', label: 'Jul' },
    { value: '8', label: 'Aug' },
    { value: '9', label: 'Sep' },
    { value: '10', label: 'Oct' },
    { value: '11', label: 'Nov' },
    { value: '12', label: 'Dec' },
  ];

export const options2 = generateOptions2();

export const monthDayMap = [
    { value: '1', label: '31' },
    { value: '2', label: '28' },
    { value: '3', label: '31' },
    { value: '4', label: '30' },
    { value: '5', label: '31' },
    { value: '6', label: '30' },
    { value: '7', label: '31' },
    { value: '8', label: '31' },
    { value: '9', label: '30' },
    { value: '10', label: '31' },
    { value: '11', label: '30' },
    { value: '12', label: '31' },
]



function generateOptions2(){
    let options = [];
    for (let i = 1950; i < 2050; i++) {
        options.push({ value: i, label: i });
    }
    return options;
}

