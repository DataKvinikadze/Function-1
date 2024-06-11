userScore = prompt("შეიუვანეთ თქვენი ქულა");
userName = prompt("შეიყვანეთ თქვენი სახელი");

function getFeedback(score, name) {
  if (score < 51) {
    alert(
      `სამწუხაროდ ${name}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${
        51 - score
      } ქულა უკეთესად მოემზადეთ!`
    );
  } else if (score < 90 && score >= 51) {
    alert(`გილოცავთ ${name} , თქვენ ${score - 51} ქულით მეტი აიღეთ ბარიერზე, `);
  } else if (score > 90) {
    alert("თქვენ ძალიან კარგი შედეგი გაქვთ!");
  }
}

getFeedback(userScore, userName);
