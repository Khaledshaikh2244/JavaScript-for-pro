/ Example program using console.warn()

// Function to check if a person is eligible to vote
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.warn("You are not eligible to vote. This is a warning because you're underage.");
  }
}

// Test the function with some ages
checkVotingEligibility(25);
checkVotingEligibility(17);
checkVotingEligibility(30);
// You are eligible to vote.
// VM66:8 You are not eligible to vote. This is a warning because you're underage