console.clear()

const fs = require('fs')
const contents: Array<any> = require('./tmpContents.json')

const blackListProperties = [
  ['ClassId', 'Code', 'CSNameEng'],
  ['CGNameEng', 'CSId', 'CSName', 'CSNameEng', 'ClassId', 'Code'],
  [
    'CGSubNameEng',
    'CGId',
    'CGName',
    'CGNameEng',
    'CSId',
    'IsExpense',
    'CSName',
    'CSNameEng',
    'ClassId',
    'Code',
    'CSType'
  ],
  ['CoaNameEng', 'CGSubId', 'CGSubDetId']
]

const replacers = [
  {
    CSId: 'id',
    CSName: 'label'
  },
  {
    CGId: 'id',
    CGName: 'label'
  },
  {
    CGSubId: 'id',
    CGSubName: 'label'
  },
  {
    CoaAccount: 'id',
    CoaName: 'label'
  }
]

function mappings(datas: Array<any>, depth: number = 0) {
  return datas.map(rec => {
    let trees: Array<any> = []
    const currBlacklist = blackListProperties[depth] || []
    const currReplacer: any = replacers[depth] || {}

    if (Array.isArray(rec.children) && rec.children?.length > 0) {
      trees = mappings(rec.children, depth + 1)
    }

    // process records
    const objProperties = Object.keys(rec)
    return {
      ...objProperties.reduce(
        (a, b) =>
          currBlacklist.indexOf(b) === -1
            ? { ...a, [currReplacer[b] || b]: rec[b] }
            : a,
        {}
      ),
      children: trees
    }
  })
}

// console.log()
const mapped = mappings(contents)

fs.writeFile(__dirname + '/result.json', JSON.stringify(mapped), () =>
  process.exit()
)
