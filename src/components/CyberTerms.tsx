import { Book, Search, Lightbulb, Code, Shield, Zap, Lock, Globe, Eye, ChevronDown, ChevronUp, RotateCcw, CheckCircle, XCircle, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const cyberTerms = [
  {
    id: 1,
    term: "Two-Factor Authentication (2FA)",
    definition: "A security process that requires two different authentication factors to verify a user's identity.",
    category: "authentication",
    difficulty: "beginner",
    icon: Lock,
    example: "Using your password + SMS code to log into your bank account",
    tips: "Always enable 2FA on critical accounts like email, banking, and social media.",
    relatedTerms: ["Multi-Factor Authentication", "Biometric Authentication"]
  },
  {
    id: 2,
    term: "Firewall",
    definition: "A network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
    category: "network",
    difficulty: "beginner",
    icon: Shield,
    example: "Like a security guard that checks everyone entering/leaving a building",
    tips: "Keep your firewall enabled and regularly update its rules.",
    relatedTerms: ["Network Security", "Packet Filtering", "Intrusion Detection"]
  },
  {
    id: 3,
    term: "Virtual Private Network (VPN)",
    definition: "A secure tunnel between your device and the internet that encrypts your data and hides your IP address.",
    category: "privacy",
    difficulty: "beginner", 
    icon: Globe,
    example: "Like sending a letter in a locked box instead of a transparent envelope",
    tips: "Use VPN when connected to public Wi-Fi networks.",
    relatedTerms: ["Encryption", "IP Address", "Tunneling Protocol"]
  },
  {
    id: 4,
    term: "SQL Injection",
    definition: "A code injection technique that exploits vulnerabilities in web applications by inserting malicious SQL statements.",
    category: "attack",
    difficulty: "intermediate",
    icon: Code,
    example: "Entering special code in a login form to bypass authentication",
    tips: "Developers should use parameterized queries and input validation.",
    relatedTerms: ["Code Injection", "Web Vulnerability", "Database Security"]
  },
  {
    id: 5,
    term: "Zero-Day Exploit",
    definition: "A cyberattack that takes advantage of a security vulnerability before it's known to security vendors or system administrators.",
    category: "threat",
    difficulty: "advanced",
    icon: Zap,
    example: "Like finding a secret entrance to a building that no one knows exists yet",
    tips: "Keep software updated and use behavioral analysis security tools.",
    relatedTerms: ["Vulnerability", "Patch Management", "Threat Intelligence"]
  },
  {
    id: 6,
    term: "Penetration Testing",
    definition: "A simulated cyberattack against a computer system to check for exploitable vulnerabilities.",
    category: "security",
    difficulty: "intermediate",
    icon: Eye,
    example: "Hiring ethical hackers to test your security before real attackers do",
    tips: "Regular pen testing helps identify security gaps before attackers do.",
    relatedTerms: ["Ethical Hacking", "Vulnerability Assessment", "Red Team"]
  }
];

const CyberTerms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [expandedTerm, setExpandedTerm] = useState<number | null>(null);
  
  // Quiz state
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const categories = ['all', 'authentication', 'network', 'privacy', 'attack', 'threat', 'security'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredTerms = cyberTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || term.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'outline';
      case 'intermediate': return 'secondary'; 
      case 'advanced': return 'destructive';
      default: return 'secondary';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'authentication': return Lock;
      case 'network': return Shield;
      case 'privacy': return Globe;
      case 'attack': return Code;
      case 'threat': return Zap;
      case 'security': return Eye;
      default: return Book;
    }
  };

  // Quiz functions
  const generateQuizQuestions = () => {
    const realLifeQuestions = [
      {
        question: "A hospital's computer systems are encrypted by malicious software, and attackers demand payment to restore access. What type of attack is this?",
        definition: "Ransomware is malicious software that encrypts files or systems and demands payment for decryption. It's a major threat to healthcare, government, and business sectors.",
        correctAnswer: "Ransomware",
        answers: ["Ransomware", "Phishing", "DDoS", "SQL Injection"],
        category: "Malware",
        difficulty: "medium"
      },
      {
        question: "An employee receives an email claiming to be from their bank asking them to click a link and enter their login credentials. What should they do?",
        definition: "This is a phishing attack. Never click suspicious links or provide credentials via email. Always verify by contacting the organization directly through official channels.",
        correctAnswer: "Delete the email and report it to IT",
        answers: ["Click the link to verify", "Enter credentials to be safe", "Delete the email and report it to IT", "Forward to colleagues as a warning"],
        category: "Social Engineering",
        difficulty: "easy"
      },
      {
        question: "A company's website becomes unavailable due to massive traffic from thousands of compromised devices. What type of attack is occurring?",
        definition: "DDoS (Distributed Denial of Service) attacks overwhelm servers with traffic from multiple sources, making services unavailable to legitimate users.",
        correctAnswer: "DDoS Attack",
        answers: ["DDoS Attack", "Data Breach", "Man-in-the-Middle", "Zero-day Exploit"],
        category: "Network Security",
        difficulty: "medium"
      },
      {
        question: "A security researcher discovers a vulnerability in a popular software that the vendor doesn't know about yet. What is this called?",
        definition: "A zero-day vulnerability is an unknown security flaw that hasn't been patched yet. These are highly valuable to attackers and can cause significant damage.",
        correctAnswer: "Zero-day Vulnerability",
        answers: ["Known vulnerability", "Zero-day Vulnerability", "Exploit kit", "Backdoor"],
        category: "Vulnerabilities",
        difficulty: "hard"
      },
      {
        question: "An attacker gains access to a company's network by exploiting a weak password on an employee's account. What security principle was violated?",
        definition: "Strong authentication and password policies are essential. This includes complex passwords, multi-factor authentication, and regular password updates.",
        correctAnswer: "Authentication Security",
        answers: ["Network Segmentation", "Authentication Security", "Data Encryption", "Access Control"],
        category: "Access Control",
        difficulty: "easy"
      },
      {
        question: "A company's customer database is accessed by unauthorized individuals who steal personal information. What type of incident is this?",
        definition: "A data breach occurs when sensitive information is accessed, disclosed, or stolen by unauthorized parties. This can lead to identity theft and financial fraud.",
        correctAnswer: "Data Breach",
        answers: ["Data Breach", "Insider Threat", "Malware Infection", "Social Engineering"],
        category: "Data Protection",
        difficulty: "medium"
      },
      {
        question: "An employee receives a USB drive in the mail with a company logo. What should they do?",
        definition: "This could be a USB drop attack where malicious devices are planted to gain network access. Never plug in unknown USB devices - report to IT security immediately.",
        correctAnswer: "Report to IT security and don't plug it in",
        answers: ["Plug it in to see what's on it", "Give it to a colleague", "Report to IT security and don't plug it in", "Throw it away"],
        category: "Physical Security",
        difficulty: "medium"
      },
      {
        question: "A company's website shows a lock icon in the browser address bar. What does this indicate?",
        definition: "The lock icon indicates HTTPS (SSL/TLS encryption) is active, meaning data transmitted between the browser and server is encrypted and secure.",
        correctAnswer: "The connection is encrypted",
        answers: ["The site is completely safe", "The connection is encrypted", "The site is government-approved", "The site has no vulnerabilities"],
        category: "Web Security",
        difficulty: "easy"
      }
    ];

    const shuffled = [...realLifeQuestions].sort(() => Math.random() - 0.5);
    const questions = shuffled.slice(0, 5);
    
    setQuizQuestions(questions);
    setIsQuizMode(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const submitAnswer = () => {
    if (!selectedAnswer) return;
    
    setShowResult(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setIsQuizMode(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizQuestions([]);
    setQuizCompleted(false);
  };

  // Quiz UI Component
  if (isQuizMode) {
    return (
      <section id="quiz" className="py-20 bg-gradient-to-b from-card/20 to-background">
        <div className="container mx-auto px-4">
          {!quizCompleted ? (
            <div className="max-w-4xl mx-auto">
              {/* Quiz Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Cybersecurity Quiz</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Test Your <span className="text-primary">Knowledge</span>
                </h2>
                <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <span>•</span>
                  <span>Score: {score}/{currentQuestion}</span>
                </div>
              </div>

              {/* Quiz Question */}
              <Card className="bg-card/50 backdrop-blur-sm border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {quizQuestions[currentQuestion]?.question}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getDifficultyColor(quizQuestions[currentQuestion]?.difficulty)} className="text-xs capitalize">
                      {quizQuestions[currentQuestion]?.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs capitalize">
                      {quizQuestions[currentQuestion]?.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {quizQuestions[currentQuestion]?.answers.map((answer: string, index: number) => {
                      const isCorrect = answer === quizQuestions[currentQuestion].correctAnswer;
                      const isSelected = selectedAnswer === answer;
                      const isWrong = showResult && isSelected && !isCorrect;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(answer)}
                          disabled={showResult}
                          className={`w-full p-4 text-left rounded-lg border transition-all ${
                            showResult && isCorrect
                              ? 'border-green-500 bg-green-500/10 text-green-400'
                              : isWrong
                              ? 'border-red-500 bg-red-500/10 text-red-400'
                              : isSelected
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 hover:bg-card/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{answer}</span>
                            {showResult && isCorrect && <CheckCircle className="h-5 w-5 text-green-400" />}
                            {showResult && isWrong && <XCircle className="h-5 w-5 text-red-400" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Quiz Actions */}
                  <div className="flex items-center justify-between">
                    <Button variant="outline" onClick={resetQuiz}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Exit Quiz
                    </Button>
                    
                    {!showResult ? (
                      <Button 
                        onClick={submitAnswer} 
                        disabled={!selectedAnswer}
                        className="animate-glow-pulse"
                      >
                        Submit Answer
                      </Button>
                    ) : (
                      <Button onClick={nextQuestion}>
                        {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                      </Button>
                    )}
                  </div>

                  {/* Answer Explanation */}
                  {showResult && (
                    <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-warning" />
                        <span className="text-sm font-medium text-foreground">Explanation</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {quizQuestions[currentQuestion]?.definition}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Quiz Results */
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <Trophy className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Quiz Complete!
                </h2>
                <div className="text-6xl font-bold text-primary mb-2">
                  {score}/{quizQuestions.length}
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  {score === quizQuestions.length 
                    ? "Perfect! You're a cybersecurity expert! 🎉"
                    : score >= quizQuestions.length * 0.8
                    ? "Excellent work! You have strong cybersecurity knowledge! 🌟"
                    : score >= quizQuestions.length * 0.6
                    ? "Good job! Keep learning to improve your skills! 📚"
                    : "Keep studying! Practice makes perfect! 💪"
                  }
                </p>
              </div>
              
              <div className="space-y-4">
                <Button onClick={generateQuizQuestions} className="animate-glow-pulse">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Take Another Quiz
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  Back to Terms
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section id="terms" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Book className="h-4 w-4 text-cyber-green" />
            <span className="text-sm text-muted-foreground">Cybersecurity Dictionary</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn <span className="text-cyber-green">Cyber Terminology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Master essential cybersecurity terms with clear definitions, examples, and practical tips.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search cybersecurity terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground text-lg"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className="capitalize text-xs"
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredTerms.map((term) => {
            const IconComponent = term.icon;
            const CategoryIcon = getCategoryIcon(term.category);
            const isExpanded = expandedTerm === term.id;
            
            return (
              <Card 
                key={term.id}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-cyber-green/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-cyber-green/10 rounded-lg group-hover:bg-cyber-green/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-cyber-green" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={getDifficultyColor(term.difficulty)} className="text-xs capitalize">
                            {term.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-xs capitalize">
                            <CategoryIcon className="h-3 w-3 mr-1" />
                            {term.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-cyber-green transition-colors">
                          {term.term}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{term.definition}</p>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/20 rounded-lg border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-warning" />
                        <span className="text-sm font-medium text-foreground">Example</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{term.example}</p>
                    </div>

                    {isExpanded && (
                      <div className="space-y-3 animate-fade-in-up">
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Security Tip</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{term.tips}</p>
                        </div>

                        <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                          <div className="flex items-center space-x-2 mb-2">
                            <Book className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium text-foreground">Related Terms</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {term.relatedTerms.map((relatedTerm, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {relatedTerm}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setExpandedTerm(isExpanded ? null : term.id)}
                      className="group-hover:text-cyber-green"
                    >
                      {isExpanded ? (
                        <>
                          Show Less <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Learn More <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="sm" onClick={generateQuizQuestions}>
                      Quiz Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No terms found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Learning CTA */}
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border">
          <Book className="h-12 w-12 text-cyber-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Want to Test Your Knowledge?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our interactive cybersecurity quiz to test your understanding of these terms and concepts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="animate-glow-pulse" onClick={generateQuizQuestions}>
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberTerms;