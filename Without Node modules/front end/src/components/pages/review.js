const people = [
  {
    id: 1,
    image: require("../images/rabi.png"),
    name: "Rabi Lamcichanne",
    title: "Office Manager",
    quote:
      "The staff at this banquet went above and beyond to make sure our event was a success. From the moment we walked in, we were greeted with a warm welcome and excellent service. The food was delicious and the attention to detail was impressive. Thank you for making our experience so memorable!",
  },
  {
    id: 2,
    image: require("../images/full.jpg"),
    name: "Prachanda",
    title: "Photographer",
    quote:
      "I was extremely impressed by the level of service and hospitality at this banquet. The staff were friendly and attentive, and they made sure that all of our needs were met. The food was also exceptional, and the presentation was stunning. I would highly recommend this venue to anyone looking for a top-notch banquet experience.",
  },
  {
    id: 3,
    image: require("../images/Sher.jpg"),
    name: "Sher Bahadur Deuba",
    title: "Fashion Designer",
    quote:
      "What a wonderful experience we had at this banquet! The service was impeccable and the staff were so friendly and helpful. The food was absolutely delicious, and we were treated like royalty throughout the entire event. Thank you for making our special occasion even more memorable.",
  },
  {
    id: 4,
    image: require("../images/Sobita-Gautam-1.jpg"),
    name: "Sobita Gautam",
    title: "Journalist ",
    quote:
      "We had such a great time at this banquet! The service was outstanding and the hospitality was second to none. The staff were so accommodating and made sure that all of our guests were well taken care of. The food was also amazing, and everyone raved about how delicious it was. We would definitely come back here again! ",
  },
];

// const [years, setYears] = useState(0);

// const increaseValue = () => {
//     setTimeout(() => {
//         setYears((currentValue) => {
//             return currentValue + 1
//         })
//     }, 200)
// }

// https://overreacted.io/a-complete-guide-to-useeffect/

// useEffect(() => {
//     if (years === 15) {
//         return;
//     }
//     increaseValue();
// }, [years])

export default people;
