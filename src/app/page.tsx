import ukulele from '@tombatossals/chords-db/src/db/ukulele/';
import progressions from '@/data/progressions.json';
import strumming from '@/data/strumming.json';
import warmup from '@/data/warmup.json';
import LikeButtons from '@/components/like';

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  const progression = progressions[Math.floor(Math.random() * progressions.length)]

  // const aMajorScale = [
  //   ukulele.chords.A.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.B.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.C.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.D.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.E.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.F.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.G.find((i: any) => i.suffix === 'dim')
  // ]

  // const bMajorScale = [
  //   ukulele.chords.B.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.C.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.D.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.E.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.F.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.G.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.A.find((i: any) => i.suffix === 'dim')
  // ]

  const cMajorScale = [
    ukulele.chords.C.find((i: any) => i.suffix === 'major'),
    ukulele.chords.D.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.E.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.F.find((i: any) => i.suffix === 'major'),
    ukulele.chords.G.find((i: any) => i.suffix === 'major'),
    ukulele.chords.A.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.B.find((i: any) => i.suffix === 'dim')
  ]

  const dMajorScale = [
    ukulele.chords.D.find((i: any) => i.suffix === 'major'),
    ukulele.chords.E.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.F.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.G.find((i: any) => i.suffix === 'major'),
    ukulele.chords.A.find((i: any) => i.suffix === 'major'),
    ukulele.chords.B.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.C.find((i: any) => i.suffix === 'dim')
  ]

  // const eMajorScale = [
  //   ukulele.chords.E.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.F.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.G.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.A.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.B.find((i: any) => i.suffix === 'major'),
  //   ukulele.chords.C.find((i: any) => i.suffix === 'minor'),
  //   ukulele.chords.D.find((i: any) => i.suffix === 'dim')
  // ]

  const fMajorScale = [
    ukulele.chords.F.find((i: any) => i.suffix === 'major'),
    ukulele.chords.G.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.A.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.Bb.find((i: any) => i.suffix === 'major'),
    ukulele.chords.C.find((i: any) => i.suffix === 'major'),
    ukulele.chords.D.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.E.find((i: any) => i.suffix === 'dim')
  ]

  const gMajorScale = [
    ukulele.chords.G.find((i: any) => i.suffix === 'major'),
    ukulele.chords.A.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.B.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.C.find((i: any) => i.suffix === 'major'),
    ukulele.chords.D.find((i: any) => i.suffix === 'major'),
    ukulele.chords.E.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.F.find((i: any) => i.suffix === 'dim')
  ]

  const scales = [cMajorScale, dMajorScale, fMajorScale, gMajorScale]
  const scale = scales[Math.floor(Math.random() * scales.length)]

  const pattern = strumming[Math.floor(Math.random() * strumming.length)]

  const warmup1 = warmup.filter((i: any) => i.type === 1)[Math.floor(Math.random() * 2)]
  const warmup2 = warmup.filter((i: any) => i.type === 2)[Math.floor(Math.random() * 2)]
  const warmup3 = warmup.filter((i: any) => i.type === 3)[Math.floor(Math.random() * 2)]

  return (
      <div>
        <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border mb-8">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium m-0 pb-0">Warmup</div>
          <div className="collapse-content">
            <ul className='list-disc list-inside'>
              <li>
                <b>{warmup1.name}</b> ({warmup1.reps} reps) <br />
                <p className='py-2'>{warmup1.exercise}</p>
              </li>
            </ul>

            <hr className="h-px my-4 bg-base-300 border-0" />

            <ul className='list-disc list-inside'>
              <li>
                <b>{warmup2.name}</b> ({warmup2.reps} reps) <br />
                <p className='whitespace-pre-line leading-loose py-2'>{warmup2.exercise}</p>
              </li>
            </ul>
          </div>
        </div>

        <h3 className='text-2xl text-center mb-2'>{progression.name}</h3>
        <p className='text-xs text-center mb-8'>{progression.progression.join(' ')}</p>

        <div className='flex flex-wrap justify-center'>
          {progression.progression.map((i: any, index: number) => {
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

        <div>
          <h3 className='text-2xl text-center mt-8 mb-2'>Strumming Pattern</h3>
          <div className='text-center'>
            <p>{pattern.pattern.join(' ')}</p>
          </div>
        </div>

        <div className='flex justify-center mt-8'>
          <LikeButtons />
        </div>
      </div>
  );
}
