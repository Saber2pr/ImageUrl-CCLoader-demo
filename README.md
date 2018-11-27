# hello-world

Hello world new project template.

```js
cc.loader.load(
  {
    url: 'http://localhost:8088/res/apple.png',
    type: 'png'
  },
  (err, tex) => {
    if (err) {
      throw err
    } else {
      cc.log(
        'Should load a texture from external url: ' +
          (tex instanceof cc.Texture2D)
      )
      this.sprite.spriteFrame = new cc.SpriteFrame(tex)
    }
  }
)
```
