import { useParams, Link } from "react-router-dom";
import { education } from "../constants/index.js";

const Subjects = () => {
  const { id } = useParams();
  const item = education[id];

  if (!item) return <p className="text-white">No subjects found.</p>;

  return (
    <section className="c-space my-20">
      <div className="max-w-4xl mx-auto text-white">
        <h2 className="head-text mb-6">{item.school} — Subjects 📚</h2>
        <p className="text-gray-400 mb-8">{item.degree} ({item.duration})</p>

        {item.subjects && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            {item.subjects.map((subj, i) => (
              <li key={i} className="bg-black-200 p-4 rounded-lg shadow hover:bg-black-300 transition">
                {subj}
              </li>
            ))}
          </ul>
        )}

        {item.semesters && (
          <div className="space-y-8">
            {item.semesters.map((sem, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg text-blue-400 mb-3">{sem.semester}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                  {sem.subjects.map((subj, j) => (
                    <li key={j} className="bg-black-200 p-4 rounded-lg shadow hover:bg-black-300 transition">
                      {subj}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <Link to="/#education" className="mt-10 inline-block text-blue-400 hover:text-blue-300 underline">
          ← Back to Education
        </Link>
      </div>
    </section>
  );
};

export default Subjects;
