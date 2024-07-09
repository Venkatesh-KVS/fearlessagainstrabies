const GenerateDosageDates = async (firstDoseDate) => {
    const secondDoseDate = new Date(firstDoseDate);
    secondDoseDate.setDate(secondDoseDate.getDate() + 3);
    const secondDoseMessagingDate = new Date(firstDoseDate);
    secondDoseMessagingDate.setDate(secondDoseMessagingDate.getDate() + 2);
    
    const thirdDoseDate = new Date(firstDoseDate);
    thirdDoseDate.setDate(thirdDoseDate.getDate() + 7);
    const thirdDoseMessagingDate = new Date(firstDoseDate);
    thirdDoseMessagingDate.setDate(thirdDoseMessagingDate.getDate() + 6);
    
    const fourthDoseDate = new Date(firstDoseDate);
    fourthDoseDate.setDate(fourthDoseDate.getDate() + 14);
    const fourthDoseMessagingDate = new Date(firstDoseDate);
    fourthDoseMessagingDate.setDate(fourthDoseMessagingDate.getDate() + 13);
    
    const fifthDoseDate = new Date(firstDoseDate);
    fifthDoseDate.setDate(fifthDoseDate.getDate() + 28);
    const fifthDoseMessagingDate = new Date(firstDoseDate);
    fifthDoseMessagingDate.setDate(fifthDoseMessagingDate.getDate() + 27);
  
    return {
      firstDoseDate: firstDoseDate.toISOString().split('T')[0],
      secondDoseDate: secondDoseDate.toISOString().split('T')[0],
      secondDoseMessagingDate: secondDoseMessagingDate.toISOString().split('T')[0],
      thirdDoseDate: thirdDoseDate.toISOString().split('T')[0],
      thirdDoseMessagingDate: thirdDoseMessagingDate.toISOString().split('T')[0],
      fourthDoseDate: fourthDoseDate.toISOString().split('T')[0],
      fourthDoseMessagingDate: fourthDoseMessagingDate.toISOString().split('T')[0],
      fifthDoseDate: fifthDoseDate.toISOString().split('T')[0],
      fifthDoseMessagingDate: fifthDoseMessagingDate.toISOString().split('T')[0],
    };
  }

  module.exports = {
    GenerateDosageDates
  };
  