// Functionality for EyeHelp Profession Guidance
const professionData = {
    student: "Take breaks every 45 mins. Use high-quality matte screen protectors. Ensure desk lighting is overhead, not behind you.",
    it_sector: "Use Blue Light filters. Adjust monitor brightness to match room lighting. Blink intentionally to avoid dry eyes.",
    doctor: "Sterilize protective goggles frequently. Ensure high-CRI lighting in surgery rooms to reduce strain.",
    driver: "Wear polarized sunglasses during the day. Use anti-glare coatings for night driving. Keep the windshield crystal clean.",
    gamer: "Use a monitor with a high refresh rate (144Hz+) to reduce flicker. Keep the room partially lit to avoid high contrast strain."
};

function getProfessionAdvice(job) {
    return professionData[job] || "Maintain general eye hygiene and regular checkups.";
}

// Simple logic for the EyeCheck logic flow
function runEyeTest() {
    // This is where you would trigger the test logic
    let score = 0;
    const userResponse = confirm("Can you see the text clearly from 2 feet away?");
    
    if(userResponse) score += 50;
    
    const resultDiv = document.getElementById('result');
    if(score >= 50) {
        resultDiv.innerHTML = "Your vision seems stable. Keep up the precautions!";
    } else {
        resultDiv.innerHTML = "Warning: Some strain detected. Please prescribe to your nearby doctor.";
    }
}