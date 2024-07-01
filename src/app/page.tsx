import ukulele from '@tombatossals/chords-db/src/db/ukulele/';
import progressions from '@/data/progressions.json';
import strumming from '@/data/strumming.json';
import RefreshButton from '@/components/refresh';

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  const progression = progressions[Math.floor(Math.random() * progressions.length)]

  const aMajorScale = [
    ukulele.chords.A.find((i: any) => i.suffix === 'major'),
    ukulele.chords.B.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.C.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.D.find((i: any) => i.suffix === 'major'),
    ukulele.chords.E.find((i: any) => i.suffix === 'major'),
    ukulele.chords.F.find((i: any) => i.suffix === 'minor'),
    ukulele.chords.G.find((i: any) => i.suffix === 'dim')
  ]

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

  const scales = [aMajorScale, cMajorScale, dMajorScale, fMajorScale, gMajorScale]
  const scale = scales[Math.floor(Math.random() * scales.length)]

  const pattern = strumming[Math.floor(Math.random() * strumming.length)]

  return (
      <div>
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
          <RefreshButton />
        </div>
      </div>
  );
}
