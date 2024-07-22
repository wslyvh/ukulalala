import ukulele from "@tombatossals/chords-db/src/db/ukulele/";

export const cMajorScale = [
  ukulele.chords.C.find((i: any) => i.suffix === "major"),
  ukulele.chords.D.find((i: any) => i.suffix === "minor"),
  ukulele.chords.E.find((i: any) => i.suffix === "minor"),
  ukulele.chords.F.find((i: any) => i.suffix === "major"),
  ukulele.chords.G.find((i: any) => i.suffix === "major"),
  ukulele.chords.A.find((i: any) => i.suffix === "minor"),
  ukulele.chords.B.find((i: any) => i.suffix === "dim"),
];

export const dMajorScale = [
  ukulele.chords.D.find((i: any) => i.suffix === "major"),
  ukulele.chords.E.find((i: any) => i.suffix === "minor"),
  ukulele.chords.F.find((i: any) => i.suffix === "minor"),
  ukulele.chords.G.find((i: any) => i.suffix === "major"),
  ukulele.chords.A.find((i: any) => i.suffix === "major"),
  ukulele.chords.B.find((i: any) => i.suffix === "minor"),
  ukulele.chords.C.find((i: any) => i.suffix === "dim"),
];

export const eMajorScale = [
  ukulele.chords.E.find((i: any) => i.suffix === "major"),
  ukulele.chords.F.find((i: any) => i.suffix === "minor"),
  ukulele.chords.G.find((i: any) => i.suffix === "minor"),
  ukulele.chords.A.find((i: any) => i.suffix === "major"),
  ukulele.chords.B.find((i: any) => i.suffix === "major"),
  ukulele.chords.C.find((i: any) => i.suffix === "minor"),
  ukulele.chords.D.find((i: any) => i.suffix === "dim"),
];

export const fMajorScale = [
  ukulele.chords.F.find((i: any) => i.suffix === "major"),
  ukulele.chords.G.find((i: any) => i.suffix === "minor"),
  ukulele.chords.A.find((i: any) => i.suffix === "minor"),
  ukulele.chords.Bb.find((i: any) => i.suffix === "major"),
  ukulele.chords.C.find((i: any) => i.suffix === "major"),
  ukulele.chords.D.find((i: any) => i.suffix === "minor"),
  ukulele.chords.E.find((i: any) => i.suffix === "dim"),
];

export const gMajorScale = [
  ukulele.chords.G.find((i: any) => i.suffix === "major"),
  ukulele.chords.A.find((i: any) => i.suffix === "minor"),
  ukulele.chords.B.find((i: any) => i.suffix === "minor"),
  ukulele.chords.C.find((i: any) => i.suffix === "major"),
  ukulele.chords.D.find((i: any) => i.suffix === "major"),
  ukulele.chords.E.find((i: any) => i.suffix === "minor"),
  ukulele.chords.F.find((i: any) => i.suffix === "dim"),
];

export const aMajorScale = [
  ukulele.chords.A.find((i: any) => i.suffix === "major"),
  ukulele.chords.B.find((i: any) => i.suffix === "minor"),
  ukulele.chords.C.find((i: any) => i.suffix === "minor"),
  ukulele.chords.D.find((i: any) => i.suffix === "major"),
  ukulele.chords.E.find((i: any) => i.suffix === "major"),
  ukulele.chords.F.find((i: any) => i.suffix === "minor"),
  ukulele.chords.G.find((i: any) => i.suffix === "dim"),
];

export const bMajorScale = [
  ukulele.chords.B.find((i: any) => i.suffix === "major"),
  ukulele.chords.C.find((i: any) => i.suffix === "minor"),
  ukulele.chords.D.find((i: any) => i.suffix === "minor"),
  ukulele.chords.E.find((i: any) => i.suffix === "major"),
  ukulele.chords.F.find((i: any) => i.suffix === "major"),
  ukulele.chords.G.find((i: any) => i.suffix === "minor"),
  ukulele.chords.A.find((i: any) => i.suffix === "dim"),
];

export const MajorScales = [
  {
    key: "C",
    suffix: "major",
    scale: cMajorScale,
  },
  {
    key: "D",
    suffix: "major",    
    scale: dMajorScale,
  },
  {
    key: "E",
    suffix: "major",
    scale: eMajorScale,
  },
  {
    key: "F",
    suffix: "major",
    scale: fMajorScale,
  },
  {
    key: "G",
    suffix: "major",
    scale: gMajorScale,
  },
  {
    key: "A",
    suffix: "major",
    scale: aMajorScale,
  },
  {
    key: "B",
    suffix: "major",
    scale: bMajorScale,
  },
];
