export const quizData = [
    {
        question: "What is epigenetics?",
        options: [
            "The study of visible traits in humans",
            "The study of how behaviors and environment can affect the way genes work",
            "The study of hereditary eye diseases",
            "The study of DNA mutations"
        ],
        answer: "The study of how behaviors and environment can affect the way genes work"
    },
    {
        question: "Which of the following is a factor that can influence epigenetic changes related to addiction?",
        options: ["Regular exercise", "Smoking and alcohol use", "Healthy eating", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "How can epigenetic factors contribute to smoking addiction?",
        options: [
            "By altering genes that control physical strength",
            "By influencing genes related to nicotine dependence and withdrawal",
            "By creating new genes that encourage addiction",
            "By strengthening the immune system"
        ],
        answer: "By influencing genes related to nicotine dependence and withdrawal"
    },
    {
        question: "Which of the following lifestyle changes can help reverse negative epigenetic changes?",
        options: ["Quitting smoking and drinking", "Avoiding physical exercise", "Eating more processed food", "Reducing water intake"],
        answer: "Quitting smoking and drinking"
    },
    {
        question: "Which of these behaviors could potentially modify epigenetic markers related to addiction?",
        options: ["Eating healthy", "High stress levels", "Regular physical activity", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What role does stress play in addiction relapse according to mental health research?",
        options: [
            "Stress has no impact on addiction relapse",
            "High levels of stress can increase the likelihood of relapse",
            "Stress only impacts physical health, not addiction",
            "Addiction relapse is purely based on willpower"
        ],
        answer: "High levels of stress can increase the likelihood of relapse"
    },
    {
        question: "Which neurotransmitter is most closely linked to addiction and the brain’s reward system?",
        options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"],
        answer: "Dopamine"
    },
    {
        question: "Which of the following is not a common strategy for preventing addiction relapse?",
        options: [
            "Avoiding high-risk situations",
            "Regular therapy and counseling",
            "Relying solely on self-control",
            "Building a strong support network"
        ],
        answer: "Relying solely on self-control"
    },
    {
        question: "How can tracking mood and mental health symptoms help in maintaining sobriety?",
        options: [
            "It provides immediate relief from addiction",
            "It allows individuals to identify triggers and patterns",
            "It eliminates the need for external support",
            "It guarantees no relapse"
        ],
        answer: "It allows individuals to identify triggers and patterns"
    },
    {
        question: "What is the main difference between genetics and epigenetics in the context of addiction?",
        options: [
            "Genetics involves environmental factors, while epigenetics does not",
            "Genetics refers to inherited traits, while epigenetics involves changes in gene expression due to lifestyle or environment",
            "Epigenetics is more permanent than genetic changes",
            "Epigenetics only affects mental health, not physical health"
        ],
        answer: "Genetics refers to inherited traits, while epigenetics involves changes in gene expression due to lifestyle or environment"
    }
];

function checkAnswers(userAnswers) {
    let score = 0;
    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
    return score;
}

