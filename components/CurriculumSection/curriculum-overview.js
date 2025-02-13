import {
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaGlobe,
  FaChalkboardTeacher,
  FaLaptop,
  FaHandsHelping,
} from "react-icons/fa";

const CurriculumSection = ({ title, icon, children }) => (
  <section className="mb-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-600">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </section>
);

const SubSection = ({ title, children }) => (
  <div className="mb-4">
    <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
    {children}
  </div>
);

const CurriculumOverview = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Empower Learning System Curriculum Overview
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed">
        The Empower Learning System is dedicated to providing high-quality,
        comprehensive education for refugee children with diverse linguistic
        backgrounds, focusing on English as a Second Language (ESL) and the
        Cambridge International Curriculum. Our curriculum is designed to be
        flexible, adaptive, and inclusive, ensuring that every child has the
        opportunity to thrive academically, socially, and emotionally.
      </p>

      <CurriculumSection
        title="Curriculum Structure"
        icon={<FaGraduationCap className="text-2xl" />}
      >
        <SubSection title="I. Early Years Program (Cambridge International Curriculum)">
          <h4 className="font-medium text-lg text-purple-600">
            a) Junior Nursery (Ages 3-4)
          </h4>
          <p className="text-gray-700">Cognitive and Language Development</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Basic Phonics Introduction</li>
            <li>Alphabet Recognition</li>
            <li>Number Recognition (1-10)</li>
            <li>Basic Shape and Color Identification</li>
            <li>Motor Skills Development</li>
            <li>Social and Emotional Learning</li>
            <li>Basic English Vocabulary Building</li>
          </ul>

          <h4 className="font-medium text-lg text-purple-600 mt-4">
            b) Senior Nursery (Ages 4-5)
          </h4>
          <p className="text-gray-700">Foundational Skills</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Advanced Phonics</li>
            <li>Alphabet and Sound Correlation</li>
            <li>Counting and Basic Math Concepts (1-20)</li>
            <li>Simple Writing Skills</li>
            <li>Social Interaction Skills</li>
            <li>Expanded English Vocabulary</li>
            <li>Basic Science Exploration</li>
          </ul>

          <h4 className="font-medium text-lg text-purple-600 mt-4">
            c) Prep Class (Ages 5-6)
          </h4>
          <p className="text-gray-700">Preparatory Learning</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Advanced Phonics and Reading Readiness</li>
            <li>Writing Basic Words and Sentences</li>
            <li>Number Sense and Simple Arithmetic</li>
            <li>Introduction to Basic Scientific Concepts</li>
            <li>Cultural Awareness and Adaptation Skills</li>
            <li>Enhanced English Communication</li>
          </ul>
        </SubSection>

        <SubSection title="II. Primary Education (Cambridge International Curriculum)">
          <h4 className="font-medium text-lg text-purple-600">
            a) Level 1 (Age 6-7) to g) Level 7 (Age 11)
          </h4>
          <p className="text-gray-700">
            Progressing from Core Subjects to IGCSE Transition, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>
              English (ESL): From basic comprehension to advanced academic
              writing
            </li>
            <li>Mathematics: From number sense to algebraic thinking</li>
            <li>
              Science: From basic environmental awareness to integrated
              scientific methodologies
            </li>
            <li>
              Advancing Skills: Focus on critical thinking and problem-solving
            </li>
            <li>
              Intermediate Learning: Emphasis on analytical and descriptive
              writing
            </li>
            <li>
              Expanding Horizons: Introduction to advanced scientific and
              mathematical concepts
            </li>
            <li>
              Advanced Intermediate: Preparation for IGCSE-level challenges
            </li>
            <li>
              Pre-IGCSE Preparation: Comprehensive review and skill
              consolidation
            </li>
            <li>
              Junior Secondary-IGCSE Transition: Final readiness for IGCSE
              examinations
            </li>
          </ul>
        </SubSection>
      </CurriculumSection>

      <CurriculumSection
        title="IGCSE Preparation Program"
        icon={<FaBook className="text-2xl" />}
      >
        <p className="text-gray-700">
          The IGCSE Preparation Program is a three-year journey designed to
          equip students with the knowledge, skills, and confidence needed to
          excel in their IGCSE examinations. The program is structured as
          follows:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>IGCSE 1 (Year 1):</strong> Core Subject Tracks including
            Intensive English Language Development, Mathematics Advanced
            Preparation, Physics Fundamentals, Chemistry Foundations, and
            Biology or ICT (Student Choice).
          </li>
          <li>
            <strong>IGCSE 2 (Year 2):</strong> Advanced Preparation with a focus
            on complex mathematical concepts, advanced physics, advanced
            chemistry, and continued specialization in Biology or ICT.
          </li>
          <li>
            <strong>IGCSE 3 (Year 3):</strong> Examination Readiness, including
            mock examinations, comprehensive subject reviews, test-taking
            strategies, and final subject selection.
          </li>
        </ul>
      </CurriculumSection>

      <CurriculumSection
        title="Multiple Pathways to Educational Success"
        icon={<FaUsers className="text-2xl" />}
      >
        <p className="text-gray-700">
          After the third year of IGCSE preparation, students have two primary
          options to continue their educational journey:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>IGCSE Examination:</strong> A globally recognized
            qualification that opens doors to further education and career
            opportunities.
          </li>
          <li>
            <strong>GED (General Educational Development) Program:</strong> An
            alternative pathway for students who may face challenges with the
            IGCSE examination. The GED program is recognized by the
            International Organization for Migration (IOM) and is accepted in
            the USA, Canada, and other countries.
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          <strong>Detailed Breakdown of the GED Program:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            Subject Areas: Math, Science, RLA (Reading and Language Arts),
            Social Studies
          </li>
          <li>Recognition by IOM and acceptance in multiple countries</li>
          <li>
            Support Mechanisms for Students: Personalized learning plans,
            mentorship, and access to resources
          </li>
        </ul>
      </CurriculumSection>

      <CurriculumSection
        title="Specialized Support"
        icon={<FaHandsHelping className="text-2xl" />}
      >
        <p className="text-gray-700">
          Our specialized support programs are designed to address the unique
          needs of refugee children, ensuring they receive the care and
          attention necessary to succeed academically and emotionally.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>ESL Integration Strategies:</strong> Tailored approaches to
            help students master English as a Second Language.
          </li>
          <li>
            <strong>Trauma-Informed Teaching Approaches:</strong> Sensitive and
            supportive methods to address the emotional and psychological needs
            of students.
          </li>
          <li>
            <strong>Cultural Sensitivity Training:</strong> Ensuring all staff
            are equipped to understand and respect the diverse backgrounds of
            our students.
          </li>
          <li>
            <strong>Individualized Learning Support:</strong> Personalized
            attention to help each student reach their full potential.
          </li>
          <li>
            <strong>Psychological and Social Adaptation Assistance:</strong>{" "}
            Counseling and support services to help students adapt to their new
            environment.
          </li>
        </ul>
      </CurriculumSection>

      <CurriculumSection
        title="Assessment and Progression"
        icon={<FaChalkboardTeacher className="text-2xl" />}
      >
        <p className="text-gray-700">
          Our assessment and progression strategies are designed to ensure
          continuous improvement and adaptability for each student.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Continuous Assessment:</strong> Regular evaluations to
            monitor student progress.
          </li>
          <li>
            <strong>Quarterly Progress Reports:</strong> Detailed reports to
            keep parents and students informed.
          </li>
          <li>
            <strong>Individual Learning Plans:</strong> Customized plans to
            address each student's unique needs.
          </li>
          <li>
            <strong>Adaptive Learning Strategies:</strong> Flexible teaching
            methods to accommodate different learning styles.
          </li>
          <li>
            <strong>Multilingual Support Mechanisms:</strong> Resources and
            assistance for students with diverse linguistic backgrounds.
          </li>
        </ul>
      </CurriculumSection>

      <CurriculumSection
        title="Extracurricular and Holistic Development"
        icon={<FaUsers className="text-2xl" />}
      >
        <p className="text-gray-700">
          Beyond academics, we focus on the holistic development of our students
          through a variety of extracurricular activities and support programs.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Cultural Exchange Programs:</strong> Opportunities for
            students to learn about and celebrate different cultures.
          </li>
          <li>
            <strong>Language Exchange Workshops:</strong> Interactive sessions
            to enhance language skills.
          </li>
          <li>
            <strong>Life Skills Training:</strong> Practical skills to prepare
            students for real-world challenges.
          </li>
          <li>
            <strong>Art and Creative Expression:</strong> Encouraging creativity
            through various art forms.
          </li>
          <li>
            <strong>Physical Education:</strong> Promoting physical health and
            well-being.
          </li>
          <li>
            <strong>Mental Health and Well-being Support:</strong> Resources and
            counseling to support emotional health.
          </li>
        </ul>
      </CurriculumSection>

      <CurriculumSection
        title="Pedagogical Approach"
        icon={<FaChalkboardTeacher className="text-2xl" />}
      >
        <p className="text-gray-700">
          Our pedagogical approach is centered around the needs of our students,
          ensuring a supportive and enriching learning environment.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Student-Centered Learning:</strong> Focusing on the
            individual needs and interests of each student.
          </li>
          <li>
            <strong>Experiential Education:</strong> Hands-on learning
            experiences to deepen understanding.
          </li>
          <li>
            <strong>Collaborative Learning Environments:</strong> Encouraging
            teamwork and peer learning.
          </li>
          <li>
            <strong>Trauma-Sensitive Instruction:</strong> Creating a safe and
            supportive classroom environment.
          </li>
          <li>
            <strong>Multilingual and Multicultural Perspective:</strong>{" "}
            Embracing and celebrating diversity in the classroom.
          </li>
        </ul>
      </CurriculumSection>

      <CurriculumSection
        title="Technology and Learning Resources"
        icon={<FaLaptop className="text-2xl" />}
      >
        <p className="text-gray-700">
          We leverage technology to enhance the learning experience and provide
          students with access to a wide range of resources.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Digital Learning Platforms:</strong> Online tools and
            platforms to support learning.
          </li>
          <li>
            <strong>Interactive Educational Tools:</strong> Engaging resources
            to make learning fun and effective.
          </li>
          <li>
            <strong>Multilingual Learning Resources:</strong> Materials
            available in multiple languages to support diverse learners.
          </li>
          <li>
            <strong>Technology-Enhanced Learning:</strong> Integrating
            technology into the classroom to enhance understanding.
          </li>
          <li>
            <strong>Online and Offline Learning Support:</strong> Ensuring
            students have access to resources both in and out of the classroom.
          </li>
        </ul>
      </CurriculumSection>

      <CurriculumSection
        title="Parent and Community Engagement"
        icon={<FaGlobe className="text-2xl" />}
      >
        <p className="text-gray-700">
          We believe in the importance of involving parents and the community in
          the educational journey of our students.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Regular Communication:</strong> Keeping parents informed and
            involved in their child's education.
          </li>
          <li>
            <strong>Workshops for Family Support:</strong> Providing resources
            and training for families.
          </li>
          <li>
            <strong>Community Integration Programs:</strong> Helping students
            and families integrate into the local community.
          </li>
          <li>
            <strong>Cultural Celebration Events:</strong> Celebrating the
            diverse cultures of our students.
          </li>
          <li>
            <strong>Collaborative Learning Environments:</strong> Encouraging
            collaboration between students, parents, and the community.
          </li>
        </ul>
      </CurriculumSection>

      <p className="text-sm italic mt-8 text-gray-600">
        Note: This curriculum is designed to be flexible and adaptive,
        recognizing the unique needs of refugee children and their diverse
        backgrounds. Regular evaluation and modification will ensure its
        effectiveness and relevance.
      </p>
    </div>
  );
};

export default CurriculumOverview;
