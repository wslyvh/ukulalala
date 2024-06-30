import ukulele from '@tombatossals/chords-db/src/db/ukulele/';
import { promises as fs } from 'fs';

export default async function Home() {
  const progressionsData = await fs.readFile(process.cwd() + '/src/data/progressions.json', 'utf8')
  const progressions = JSON.parse(progressionsData)
  const progression = progressions[Math.floor(Math.random() * progressions.length)]

  const cMajorScale = [
    ukulele.chords.C.find(i => i.suffix === 'major'),
    ukulele.chords.D.find(i => i.suffix === 'minor'),
    ukulele.chords.E.find(i => i.suffix === 'minor'),
    ukulele.chords.F.find(i => i.suffix === 'major'),
    ukulele.chords.G.find(i => i.suffix === 'major'),
    ukulele.chords.A.find(i => i.suffix === 'minor'),
    ukulele.chords.B.find(i => i.suffix === 'dim')
  ]
  const gMajorScale = [
    ukulele.chords.G.find(i => i.suffix === 'major'),
    ukulele.chords.A.find(i => i.suffix === 'minor'),
    ukulele.chords.B.find(i => i.suffix === 'minor'),
    ukulele.chords.C.find(i => i.suffix === 'major'),
    ukulele.chords.D.find(i => i.suffix === 'major'),
    ukulele.chords.E.find(i => i.suffix === 'minor'),
    ukulele.chords.F.find(i => i.suffix === 'dim')
  ]
  const fMajorScale = [
    ukulele.chords.F.find(i => i.suffix === 'major'),
    ukulele.chords.G.find(i => i.suffix === 'minor'),
    ukulele.chords.A.find(i => i.suffix === 'minor'),
    ukulele.chords.Bb.find(i => i.suffix === 'major'),
    ukulele.chords.C.find(i => i.suffix === 'major'),
    ukulele.chords.D.find(i => i.suffix === 'minor'),
    ukulele.chords.E.find(i => i.suffix === 'dim')
  ]

  const scales = [cMajorScale, gMajorScale, fMajorScale];
  const scale = scales[Math.floor(Math.random() * scales.length)]

  return (
      <div>
        <h3 className='text-2xl text-center mb-8'>{progression.name}</h3>

        <div className='flex flex-wrap justify-center'>
          {progression.progression.map((i, index) => {
            const chord = scale[i - 1]
            return (
              <div key={index}>
                <uke-chord 
                  key={index}
                  frets={chord.positions[0].frets}
                  fingers={chord.positions[0].fingers}
                  position={chord.positions[0].position}
                  name={`${chord.key} ${chord.suffix}`}
                  size={1.5} />
              </div>
            )
          })}
        </div>
      </div>
  );
}
