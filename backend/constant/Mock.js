const mockdata = [
    {
      id: 0,
      name: "Service Based Companies Mock Series 2021 - Test 2",
      date: "Jul 24",
      participants: "1819",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
      price: 1200,
    },
    {
      id: 1,
      name: "Aptitude Placement 2022 - Mock test 3",
      date: "Sep 22",
      participants: "1015",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
      price: 1200,
    },
    {
      id: 2,
      name: "Product-Based Companies 2022 - Mock Test 3",
      date: "Sep 19",
      participants: "2142",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 3,
      name: "Aptitude Placement 2022 - Mock test 2",
      date: "Sep 13",
      participants: "2410",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      time: "60 min",
      price: 1200,
    },
    {
      id: 4,
      name: "Service-Based Companies 2022 - Mock Test 2",
      date: "Sep 10",
      participants: "2665",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 5,
      name: "Product-Based Companies 2022 - Mock Test 2",
      date: "Sep 8",
      participants: "2440",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 6,
      name: "Aptitude Placement 2022 - Mock Test 1",
      date: "Aug 12",
      participants: "2037",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 7,
      name: "Product-Based Companies 2022 - Mock Test 1",
      date: "Aug 10",
      participants: "1930",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 8,
      name: "Service-Based Companies 2022 - Mock Test 1",
      date: "Aug 8",
      participants: "2034",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 9,
      name: "Service Based Companies Mock Series 2021 - Test 5",
      date: "Aug 2",
      participants: "2564",
      time: "120 min",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 10,
      name: "Service Based Companies Mock Series 2021 - Test 4",
      date: "Jul 31",
      participants: "1794",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      time: "120 min",
      price: 1200,
    },
    {
      id: 11,
      name: "Service Based Companies Mock Series 2021 - Test 3",
      date: "Jul 27",
      participants: "1896",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      time: "120 min",
      price: 1200,
    },
    {
      id: 12,
      name: "Aptitude",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
      price: 1200,
    },
    {
      id: 13,
      name: "Computer Networks",
  
      img: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/IPv4.svg",
      price: 1200,
    },
    {
      id: 14,
      name: "Database Management System",
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816734176-anomalies-and-functional-dependency.svg",
  
      price: 1200,
    },
    {
      id: 15,
      name: "Algorithms",
  
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623765556116-backtracking.svg",
  
      time: "60 min",
      price: 1200,
    },
    {
      id: 16,
      name: "C Language",
  
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
  
      price: 1200,
    },
    {
      id: 17,
      name: "Operating System",
  
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623817215289-atomic-transactions.svg",
  
      price: 1200,
    },
    {
      id: 18,
      name: "C++ Language",
  
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816336071-abstraction.svg",
  
      price: 1200,
    },
    {
      id: 19,
      name: "Data Structures",
  
      img: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/array.svg",
  
      price: 1200,
    },
    {
      id: 20,
      name: "Java Language",
  
      img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816917473-access-modifiers-this-super.svg",
  
      price: 1200,
    },
  ];
  
  module.exports = mockdata;
  