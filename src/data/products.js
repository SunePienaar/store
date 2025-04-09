const products = [
    {
      id: 1,
      name: 'Lipgloss',
      price: 12.99,
      description: 'A shiny and moisturizing lip gloss for a perfect pout.',
      styles: [
        { id: 'lipgloss1', image: require('../assets/images/lipgloss1.jpg') },
        { id: 'lipgloss2', image: require('../assets/images/lipgloss2.jpg') },
        { id: 'lipgloss3', image: require('../assets/images/lipgloss3.jpg') },
        { id: 'lipgloss4', image: require('../assets/images/lipgloss4.jpg') },
      ],
    },
    {
      id: 2,
      name: 'Mascara',
      price: 15.99,
      description: 'A volumizing mascara for bold and beautiful lashes.',
      styles: [
        { id: 'mascara1', image: require('../assets/images/mascara1.jpg') },
        { id: 'mascara2', image: require('../assets/images/mascara2.jpg') },
        { id: 'mascara3', image: require('../assets/images/mascara3.jpg') },
        { id: 'mascara4', image: require('../assets/images/mascara4.jpg') },
      ],
    },
    {
      id: 3,
      name: 'Blush',
      price: 10.99,
      description: 'A soft and blendable blush for a natural glow.',
      styles: [
        { id: 'blush1', image: require('../assets/images/blush1.jpg') },
        { id: 'blush2', image: require('../assets/images/blush2.jpg') },
        { id: 'blush3', image: require('../assets/images/blush3.jpg') },
        { id: 'blush4', image: require('../assets/images/blush4.jpg') },
      ],
    },
    {
      id: 4,
      name: 'Eyeshadow Palette',
      price: 25.99,
      description: 'A versatile eyeshadow palette with vibrant colors.',
      styles: [
        { id: 'eyeshadow1', image: require('../assets/images/eyeshadow1.jpg') },
        { id: 'eyeshadow2', image: require('../assets/images/eyeshadow2.jpg') },
        { id: 'eyeshadow3', image: require('../assets/images/eyeshadow3.jpg') },
        { id: 'eyeshadow4', image: require('../assets/images/eyeshadow4.jpg') },
      ],
    },
  ];
  
  export default products;