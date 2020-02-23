import Link from 'next/link';

const people = [
  { v: 'car', name: 'bruno' },
  { v: 'bike', name: 'John' },
  { v: 'airplane', name: 'Mick' }
];

export default function Details() {
  return (
    <div>
      {people.map(e => (
        <div>
          <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.name}'s {e.v}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
