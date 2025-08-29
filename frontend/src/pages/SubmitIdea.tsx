import { useState } from 'react';
import axios from 'axios';

const SubmitIdea = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [implementationConcepts, setImplementationConcepts] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [certificate, setCertificate] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setCertificate(null);

    // Client-side validation
    if (!title.trim() || !description.trim()) {
      setError('Title and Description are required.');
      return;
    }

    try {
      const response = await axios.post('/api/ideas/submit', {
        title,
        description,
        tags: tags.split(',').map((tag) => tag.trim()).filter(Boolean),
        implementationConcepts,
      });

      if (response.status === 201) {
        setSuccess('Idea submitted successfully!');
        setCertificate(response.data.certificate);
        setTitle('');
        setDescription('');
        setTags('');
        setImplementationConcepts('');
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Submit Your Idea</h2>

        {success && <p className="mb-4 text-green-600 text-center">{success}</p>}
        {certificate && (
          <div className="mb-4 text-center">
            <a
              href={`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(certificate, null, 2))}`}
              download={`IdeaVault_Certificate_${certificate.id}.json`}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Download Certificate
            </a>
          </div>
        )}
        {error && <p className="mb-4 text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Implementation Concepts (optional)</label>
            <textarea
              value={implementationConcepts}
              onChange={(e) => setImplementationConcepts(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">Tags (comma separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitIdea;

