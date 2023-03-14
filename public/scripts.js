const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 10,
            questions: [
                {
                    question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
                    answers: {a: 'Amazon EC2 costs are billed on a monthly basis.', b: 'Users retain full administrative access to their Amazon EC2 instances.', c: 'Amazon EC2 instances can be launched on demand when needed.', d: 'Users can permanently run enough instances to handle peak workloads.'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which AWS service would simplify the migration of a database to AWS?",
                    answers: {a: 'AWS Storage Gateway', b: 'AWS Database Migration Service (AWS DMS)', c: 'Amazon EC2', d: 'Amazon AppStream 2.0'},
                    correctAnswer: 'd'
                },
                {
                    question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
                    answers: {a: 'AWS Config', b: 'AWS OpsWorks', c: 'AWS SDK', d: 'AWS Marketplace'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which AWS networking service enables a company to create a virtual network within AWS?",
                    answers: {a: 'AWS Config', b: ' Amazon Route 53', c: 'AWS Direct Connect', d: 'Amazon Virtual Private Cloud (Amazon VPC)'},
                    correctAnswer: 'd'
                },
                {
                    question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
                    answers: {a: 'Configuring third-party applications', b: ' Maintaining physical hardware', c: 'Securing application access and data', d: ' Managing guest operating systems'},
                    correctAnswer: 'd'
                },
                {
                    question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
                    answers: {a: 'AWS Regions', b: 'Edge locations', c: 'Availability Zones', d: 'Virtual Private Cloud (VPC)'},
                    correctAnswer: 'b'
                },
                {
                    question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
                    answers: {a: 'Use Amazon Cloud Directory', b: ' Audit AWS Identity and Access Management (IAM) roles', c: 'Enable multi-factor authentication', d: 'Enable AWS CloudTrail'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
                    answers: {a: 'AWS Trusted Advisor', b: 'AWS CloudTrail', c: 'AWS X-Ray', d: 'AWS Identity and Access Management (AWS IAM)'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
                    answers: {a: 'Amazon Simple Notification Service (Amazon SNS)', b: 'AWS CloudTrail', c: 'AWS Trusted Advisor', d: 'Amazon Route 53'},
                    correctAnswer: 'a'
                },
                {
                    question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
                    answers: {a: 'AWS Trusted Advisor', b: 'AWS Identity and Access Management (IAM)', c: 'AWS Billing Console', d: 'AWS Acceptable Use Policy'},
                    correctAnswer: 'd'
                },
            ]
        }
    },
    computed: {
        progress() {
            return (this.index / this.questions.length) * 100;
        },
        question() {
            return this.questions[this.index].question;
        },
        answers() {
            return this.questions[this.index].answers;
        },
        shuffledOptions() {
            return this.shuffle(this.answers);
        }
    },
    methods: {
        // shuffle(array) {
        //     let currentIndex = array.length;
        //     let temporaryValue, randomIndex;

        //     while (currentIndex != 0)
        //     {
        //         randomIndex = Math.floor(Math.random() * currentIndex);
        //         currentIndex--;

        //         temporaryValue = array[currentIndex];
        //         array[currentIndex] = array[randomIndex];
        //         array[randomIndex] = temporaryValue;
        //     }
        //     return array;
        // },
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        },
        // mounted() {
        //     this.questions = this.shuffle(this.questions);
        // }
    }
})

app.mount('#app')