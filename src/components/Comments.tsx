// ./src/components/Comments.js

'use client';

import toast from 'react-hot-toast';

import { FormEventHandler, useState } from 'react';
import { Bounded } from './Bounded';
import { Heading } from './Heading';

interface Props {
  id: string;
  uid: string;
  comments:
    | {
        id: string;
        post_id: any;
        nickname: any;
        email: any;
        payload: any;
        created_at: any;
        published: any;
      }[]
    | null;
}

export function Comments({ id, uid, comments }: Props) {
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(comments);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`/api/comments/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post_id: id,
        nickname,
        email,
        comment,
        uid,
      }),
    })
      .then((data) => {
        setLoading(false);
        setComment('');
        setEmail('');
        setNickname('');
        toast.success('The comment was sucessfully added!');
      })
      .catch((error) => {
        toast.error('Comment could not be added.');
        console.error(error);
      });
  };

  return (
    <Bounded>
      {comments && comments.length > 0 && (
        <>
          <Heading as="h2" size="3xl" className="mt-12">
            What people are saying
          </Heading>
          {comments.map((comment, index) => (
            <div className="p-6 border my-4" key={index}>
              <header className="text-sm">
                {`Posted by ${comment.nickname} on ${new Date(
                  comment.created_at
                ).toLocaleTimeString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}`}
              </header>
              <p className="mt-4">{comment.payload}</p>
            </div>
          ))}
        </>
      )}
      <Heading as="h2" size="3xl">
        Share your thoughts
      </Heading>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="comment" className="mb-2 mt-6 text-lg block">
            Comment
          </label>
          <textarea
            id="comment"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment"
            className="w-full border p-4"
            value={comment}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 mt-6 text-lg block">
            Email
          </label>
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="w-full border p-4"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="nickname" className="mb-2 mt-6 text-lg block">
            Nickname
          </label>
          <input
            id="nickname"
            onChange={(e) => setNickname(e.target.value)}
            type="text"
            placeholder="Your nickname"
            className="w-full border p-4"
            value={nickname}
          />
        </div>
        <button
          className="p-4 bg-slate-700 text-white mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Send comment'}
        </button>
      </form>
    </Bounded>
  );
}
