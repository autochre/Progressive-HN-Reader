import 'babel-polyfill'
import polyfill from 'es6-promise'
import 'isomorphic-fetch'
import * as chai from 'chai'
import 'mochawait'

import * as update from './update'

let expect = chai.expect
let getStory = update.getStory
let getTopstories = update.getTopstories

describe('getStory', () => {
  it("should fetch story with id 8863 and return json object", async function() {
      const story8863 = {"by":"dhouston","descendants":71,"id":8863,"kids":[8952,9224,8917,8884,8887,8943,8869,8958,9005,9671,9067,8940,8908,9055,8865,8881,8872,8873,8955,10403,8903,8928,9125,8998,8901,8902,8907,8894,8878,8980,8870,8934,8876],"score":111,"time":1175714200,"title":"My YC app: Dropbox - Throw away your USB drive","type":"story","url":"http://www.getdropbox.com/u/2/screencast.html"}
      let story = await getStory(8863)
      expect(story).to.deep.equal(story8863)
  })
})

describe('getTopstories', () => {
  it("should return an array with 500 fields", async function() {
      const topstories = await getTopstories()
      expect(topstories).to.have.length(500)
  })
})
