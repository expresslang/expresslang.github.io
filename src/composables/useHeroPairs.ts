import { ref } from 'vue'

export interface HeroPair {
  slogan: string
  filename: string
  code: string
}

export const heroPairs: HeroPair[] = [
  {
    slogan: 'smart manufacturing',
    filename: 'part_schema.exp',
    code: 'SCHEMA Part_Management;\nENTITY part;\n    id : STRING;\n    material : REAL;\n    mass : MEASURE_VALUE;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: 'digital twins',
    filename: 'product_twins.exp',
    code: 'SCHEMA Digital_Twin;\nENTITY product;\n    serial_no : STRING;\n    geometry : shape_representation;\n    status : operational_state;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: '3D design',
    filename: 'geometry.exp',
    code: 'SCHEMA Geometry;\nENTITY point;\n    x, y, z : REAL;\nEND_ENTITY;\nENTITY line;\n    start, end : point;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: 'data exchange',
    filename: 'step_exchange.exp',
    code: 'SCHEMA Data_Exchange;\nENTITY transfer_record;\n    schema_id : STRING;\n    timestamp : date_time;\n    payload : LIST OF entity_instance;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: 'interoperability',
    filename: 'assembly.exp',
    code: 'SCHEMA Assembly;\nENTITY assembly;\n    components : LIST [1:?] OF part;\nEND_ENTITY;\nENTITY part;\n    id, name : STRING;\nEND_ENTITY;\nEND_SCHEMA;',
  },
]

const pairIndex = ref(0)
const typedText = ref(heroPairs[0].code)
let started = false
let typeTimer: ReturnType<typeof setInterval> | null = null
let pairTimer: ReturnType<typeof setInterval> | null = null

function startTyping() {
  if (typeTimer) clearInterval(typeTimer)
  const fullText = heroPairs[pairIndex.value].code
  let i = 0
  typedText.value = ''
  typeTimer = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText[i]
      i++
    } else {
      if (typeTimer) clearInterval(typeTimer)
    }
  }, 22)
}

export function useHeroPairs() {
  if (!started) {
    started = true
    pairTimer = setInterval(() => {
      pairIndex.value = (pairIndex.value + 1) % heroPairs.length
      startTyping()
    }, 7000)
  }
  return { pairIndex, typedText, heroPairs }
}
