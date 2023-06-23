!function(t, e) {
    "use strict";
    class i {
        constructor() {
            this.textureName = null, this.textureCount = 1, this.maxPartices = 100, this.duration = 1, 
            this.ageAddScale = 0, this.emitterVelocitySensitivity = 1, this.minStartSize = 100, 
            this.maxStartSize = 100, this.minEndSize = 100, this.maxEndSize = 100, this.minHorizontalVelocity = 0, 
            this.maxHorizontalVelocity = 0, this.minVerticalVelocity = 0, this.maxVerticalVelocity = 0, 
            this.endVelocity = 1, this.gravity = new Float32Array([ 0, 0, 0 ]), this.minRotateSpeed = 0, 
            this.maxRotateSpeed = 0, this.minStartRadius = 0, this.maxStartRadius = 0, this.minEndRadius = 0, 
            this.maxEndRadius = 0, this.minHorizontalStartRadian = 0, this.maxHorizontalStartRadian = 0, 
            this.minVerticalStartRadian = 0, this.maxVerticalStartRadian = 0, this.useEndRadian = !0, 
            this.minHorizontalEndRadian = 0, this.maxHorizontalEndRadian = 0, this.minVerticalEndRadian = 0, 
            this.maxVerticalEndRadian = 0, this.minStartColor = new Float32Array([ 1, 1, 1, 1 ]), 
            this.maxStartColor = new Float32Array([ 1, 1, 1, 1 ]), this.minEndColor = new Float32Array([ 1, 1, 1, 1 ]), 
            this.maxEndColor = new Float32Array([ 1, 1, 1, 1 ]), this.colorComponentInter = !1, 
            this.disableColor = !1, this.blendState = 0, this.emitterType = "null", this.emissionRate = 0, 
            this.pointEmitterPosition = new Float32Array([ 0, 0, 0 ]), this.pointEmitterPositionVariance = new Float32Array([ 0, 0, 0 ]), 
            this.pointEmitterVelocity = new Float32Array([ 0, 0, 0 ]), this.pointEmitterVelocityAddVariance = new Float32Array([ 0, 0, 0 ]), 
            this.boxEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), this.boxEmitterSize = new Float32Array([ 0, 0, 0 ]), 
            this.boxEmitterVelocity = new Float32Array([ 0, 0, 0 ]), this.boxEmitterVelocityAddVariance = new Float32Array([ 0, 0, 0 ]), 
            this.sphereEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), this.sphereEmitterRadius = 1, 
            this.sphereEmitterVelocity = 0, this.sphereEmitterVelocityAddVariance = 0, this.ringEmitterCenterPosition = new Float32Array([ 0, 0, 0 ]), 
            this.ringEmitterRadius = 30, this.ringEmitterVelocity = 0, this.ringEmitterVelocityAddVariance = 0, 
            this.ringEmitterUp = 2, this.positionVariance = new Float32Array([ 0, 0, 0 ]);
        }
        static checkSetting(t) {
            var e;
            for (e in i._defaultSetting) e in t || (t[e] = i._defaultSetting[e]);
            t.endVelocity = +t.endVelocity, t.gravity[0] = +t.gravity[0], t.gravity[1] = +t.gravity[1], 
            t.gravity[2] = +t.gravity[2];
        }
    }
    i._defaultSetting = new i();
    class r {
        constructor() {}
        addParticleArray(t, e) {}
    }
    class a {
        constructor() {}
        static Create(t, i, r, s) {
            var n = new a();
            n.position = i, e.MathUtil.scaleVector3(r, t.emitterVelocitySensitivity, a._tempVelocity);
            var o, l = e.MathUtil.lerp(t.minHorizontalVelocity, t.maxHorizontalVelocity, Math.random()), h = Math.random() * Math.PI * 2;
            if (a._tempVelocity[0] += l * Math.cos(h), a._tempVelocity[2] += l * Math.sin(h), 
            a._tempVelocity[1] += e.MathUtil.lerp(t.minVerticalVelocity, t.maxVerticalVelocity, Math.random()), 
            n.velocity = a._tempVelocity, n.startColor = a._tempStartColor, n.endColor = a._tempEndColor, 
            t.disableColor) {
                for (o = 0; o < 3; o++) n.startColor[o] = 1, n.endColor[o] = 1;
                n.startColor[o] = e.MathUtil.lerp(t.minStartColor[o], t.maxStartColor[o], Math.random()), 
                n.endColor[o] = e.MathUtil.lerp(t.minEndColor[o], t.maxEndColor[o], Math.random());
            } else if (t.colorComponentInter) for (o = 0; o < 4; o++) n.startColor[o] = e.MathUtil.lerp(t.minStartColor[o], t.maxStartColor[o], Math.random()), 
            n.endColor[o] = e.MathUtil.lerp(t.minEndColor[o], t.maxEndColor[o], Math.random()); else e.MathUtil.lerpVector4(t.minStartColor, t.maxStartColor, Math.random(), n.startColor), 
            e.MathUtil.lerpVector4(t.minEndColor, t.maxEndColor, Math.random(), n.endColor);
            n.sizeRotation = a._tempSizeRotation;
            var m = Math.random();
            n.sizeRotation[0] = e.MathUtil.lerp(t.minStartSize, t.maxStartSize, m), n.sizeRotation[1] = e.MathUtil.lerp(t.minEndSize, t.maxEndSize, m), 
            n.sizeRotation[2] = e.MathUtil.lerp(t.minRotateSpeed, t.maxRotateSpeed, Math.random()), 
            n.radius = a._tempRadius;
            var d = Math.random();
            n.radius[0] = e.MathUtil.lerp(t.minStartRadius, t.maxStartRadius, d), n.radius[1] = e.MathUtil.lerp(t.minEndRadius, t.maxEndRadius, d), 
            n.radian = a._tempRadian, n.radian[0] = e.MathUtil.lerp(t.minHorizontalStartRadian, t.maxHorizontalStartRadian, Math.random()), 
            n.radian[1] = e.MathUtil.lerp(t.minVerticalStartRadian, t.maxVerticalStartRadian, Math.random());
            var c = t.useEndRadian;
            return n.radian[2] = c ? e.MathUtil.lerp(t.minHorizontalEndRadian, t.maxHorizontalEndRadian, Math.random()) : n.radian[0], 
            n.radian[3] = c ? e.MathUtil.lerp(t.minVerticalEndRadian, t.maxVerticalEndRadian, Math.random()) : n.radian[1], 
            n.durationAddScale = t.ageAddScale * Math.random(), n.time = s, n;
        }
    }
    a._tempVelocity = new Float32Array(3), a._tempStartColor = new Float32Array(4), 
    a._tempEndColor = new Float32Array(4), a._tempSizeRotation = new Float32Array(3), 
    a._tempRadius = new Float32Array(2), a._tempRadian = new Float32Array(4);
    class s extends r {
        constructor(t) {
            super(), this._floatCountPerVertex = 29, this._firstActiveElement = 0, this._firstNewElement = 0, 
            this._firstFreeElement = 0, this._firstRetiredElement = 0, this._currentTime = 0, 
            this.settings = t;
        }
        reUse(t, e) {
            return 0;
        }
        initialize() {
            var t;
            this._vertices = this._mesh._vb.getFloat32Array(), t = this._mesh._stride / 4;
            for (var e = 0, i = 0, r = 0; r < this.settings.maxPartices; r++) {
                var a, s = Math.random(), n = this.settings.textureCount ? 1 / this.settings.textureCount : 1;
                for (a = 0; a < this.settings.textureCount && !(s < a + n); a += n) ;
                this._vertices[e++] = -1, this._vertices[e++] = -1, this._vertices[e++] = 0, this._vertices[e++] = a, 
                e = i += t, this._vertices[e++] = 1, this._vertices[e++] = -1, this._vertices[e++] = 1, 
                this._vertices[e++] = a, e = i += t, this._vertices[e++] = 1, this._vertices[e++] = 1, 
                this._vertices[e++] = 1, this._vertices[e++] = a + n, e = i += t, this._vertices[e++] = -1, 
                this._vertices[e++] = 1, this._vertices[e++] = 0, this._vertices[e++] = a + n, e = i += t;
            }
        }
        update(t) {
            this._currentTime += t / 1e3, this.retireActiveParticles(), this.freeRetiredParticles(), 
            this._firstActiveElement == this._firstFreeElement && (this._currentTime = 0), this._firstRetiredElement == this._firstActiveElement && (this._drawCounter = 0);
        }
        retireActiveParticles() {
            for (var t = this.settings.duration; this._firstActiveElement != this._firstNewElement; ) {
                var e = this._firstActiveElement * this._floatCountPerVertex * 4, i = e + 28, r = this._currentTime - this._vertices[i];
                if ((r *= 1 + this._vertices[e + 27]) + 1e-4 < t) break;
                this._vertices[i] = this._drawCounter, this._firstActiveElement++, this._firstActiveElement >= this.settings.maxPartices && (this._firstActiveElement = 0);
            }
        }
        freeRetiredParticles() {
            for (;this._firstRetiredElement != this._firstActiveElement; ) {
                if (this._drawCounter - this._vertices[this._firstRetiredElement * this._floatCountPerVertex * 4 + 28] < 3) break;
                this._firstRetiredElement++, this._firstRetiredElement >= this.settings.maxPartices && (this._firstRetiredElement = 0);
            }
        }
        addNewParticlesToVertexBuffer() {}
        addParticleArray(t, e) {
            var i = this._firstFreeElement + 1;
            if (i >= this.settings.maxPartices && (i = 0), i !== this._firstRetiredElement) {
                for (var r = a.Create(this.settings, t, e, this._currentTime), s = this._firstFreeElement * this._floatCountPerVertex * 4, n = 0; n < 4; n++) {
                    var o, l;
                    for (o = 0, l = 4; o < 3; o++) this._vertices[s + n * this._floatCountPerVertex + l + o] = r.position[o];
                    for (o = 0, l = 7; o < 3; o++) this._vertices[s + n * this._floatCountPerVertex + l + o] = r.velocity[o];
                    for (o = 0, l = 10; o < 4; o++) this._vertices[s + n * this._floatCountPerVertex + l + o] = r.startColor[o];
                    for (o = 0, l = 14; o < 4; o++) this._vertices[s + n * this._floatCountPerVertex + l + o] = r.endColor[o];
                    for (o = 0, l = 18; o < 3; o++) this._vertices[s + n * this._floatCountPerVertex + l + o] = r.sizeRotation[o];
                    for (o = 0, l = 21; o < 2; o++) this._vertices[s + n * this._floatCountPerVertex + l + o] = r.radius[o];
                    for (o = 0, l = 23; o < 4; o++) this._vertices[s + n * this._floatCountPerVertex + l + o] = r.radian[o];
                    this._vertices[s + n * this._floatCountPerVertex + 27] = r.durationAddScale, this._vertices[s + n * this._floatCountPerVertex + 28] = r.time;
                }
                this._firstFreeElement = i;
            }
        }
    }
    var n = "attribute vec4 a_CornerTextureCoordinate;\r\nattribute vec3 a_Position;\r\nattribute vec3 a_Velocity;\r\nattribute vec4 a_StartColor;\r\nattribute vec4 a_EndColor;\r\nattribute vec3 a_SizeRotation;\r\nattribute vec2 a_Radius;\r\nattribute vec4 a_Radian;\r\nattribute float a_AgeAddScale;\r\nattribute float a_Time;\r\n\r\nvarying vec4 v_Color;\r\nvarying vec2 v_TextureCoordinate;\r\n\r\nuniform float u_CurrentTime;\r\nuniform float u_Duration;\r\nuniform float u_EndVelocity;\r\nuniform vec3 u_Gravity;\r\n\r\nuniform vec2 size;\r\nuniform mat4 u_mmat;\r\n\r\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\r\n{\r\n\r\n   float startVelocity = length(velocity);//起始标量速度\r\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\r\n\r\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\r\n   \r\n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \r\n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\r\n   \r\n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\r\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\r\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\r\n   \r\n   float r =cos(radianVertical)* radius;\r\n   addPosition.y += sin(radianVertical) * radius;\r\n\t\r\n   addPosition.x += cos(radianHorizontal) *r;\r\n   addPosition.z += sin(radianHorizontal) *r;\r\n  \r\n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\r\n   position+=addPosition;\r\n   return  vec4(position,1.0);\r\n}\r\n\r\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\r\n{    \r\n    float size = mix(startSize, endSize, normalizedAge);\r\n    return size;\r\n}\r\n\r\nmat2 ComputeParticleRotation(in float rot,in float age)\r\n{    \r\n    float rotation =rot * age;\r\n    //计算2x2旋转矩阵.\r\n    float c = cos(rotation);\r\n    float s = sin(rotation);\r\n    return mat2(c, -s, s, c);\r\n}\r\n\r\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\r\n{\r\n\tvec4 color=mix(startColor,endColor,normalizedAge);\r\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\r\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\r\n   \r\n    return color;\r\n}\r\n\r\nvoid main()\r\n{\r\n   float age = u_CurrentTime - a_Time;\r\n   age *= 1.0 + a_AgeAddScale;\r\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\r\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\r\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\r\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\r\n\t\r\n    mat4 mat=u_mmat;\r\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\r\n    gl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\r\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\r\n   \r\n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\r\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\r\n}\r\n\r\n", o = "#ifdef GL_FRAGMENT_PRECISION_HIGH\r\nprecision highp float;\r\n#else\r\nprecision mediump float;\r\n#endif\r\n\r\nvarying vec4 v_Color;\r\nvarying vec2 v_TextureCoordinate;\r\nuniform sampler2D u_texture;\r\n\r\nvoid main()\r\n{\t\r\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\r\n\tgl_FragColor.xyz *= v_Color.w;\r\n}";
    class l extends e.Shader {
        constructor() {
            super(n, o, "ParticleShader", null, [ "a_CornerTextureCoordinate", 0, "a_Position", 1, "a_Velocity", 2, "a_StartColor", 3, "a_EndColor", 4, "a_SizeRotation", 5, "a_Radius", 6, "a_Radian", 7, "a_AgeAddScale", 8, "a_Time", 9 ]);
        }
    }
    l.vs = n, l.ps = o;
    class h extends e.Value2D {
        constructor() {
            super(0, 0), h.pShader || (h.pShader = new l());
        }
        upload() {
            var t = this.size;
            t[0] = e.RenderState2D.width, t[1] = e.RenderState2D.height, this.alpha = this.ALPHA * e.RenderState2D.worldAlpha, 
            h.pShader.upload(this);
        }
    }
    h.pShader = null;
    class m extends s {
        constructor(t) {
            super(t), this.x = 0, this.y = 0, this.sv = new h(), this._key = {};
            var i = this;
            e.ILaya.loader.load(this.settings.textureName, e.Handler.create(null, function(t) {
                i.texture = t;
            }), null, e.Loader.IMAGE), this.sv.u_Duration = this.settings.duration, this.sv.u_Gravity = this.settings.gravity, 
            this.sv.u_EndVelocity = this.settings.endVelocity, this._blendFn = e.BlendMode.fns[t.blendState], 
            this._mesh = e.MeshParticle2D.getAMesh(this.settings.maxPartices), this.initialize();
        }
        getRenderType() {
            return -111;
        }
        releaseRender() {}
        addParticleArray(t, e) {
            t[0] += this.x, t[1] += this.y, super.addParticleArray(t, e);
        }
        addNewParticlesToVertexBuffer() {
            var t, e = this._mesh._vb;
            e.clear(), e.append(this._vertices), this._firstNewElement < this._firstFreeElement ? (t = 4 * this._firstNewElement * this._floatCountPerVertex * 4, 
            e.subUpload(t, t, t + 4 * (this._firstFreeElement - this._firstNewElement) * this._floatCountPerVertex * 4)) : (t = 4 * this._firstNewElement * this._floatCountPerVertex * 4, 
            e.subUpload(t, t, t + 4 * (this.settings.maxPartices - this._firstNewElement) * this._floatCountPerVertex * 4), 
            this._firstFreeElement > 0 && (e.setNeedUpload(), e.subUpload(0, 0, 4 * this._firstFreeElement * this._floatCountPerVertex * 4))), 
            this._firstNewElement = this._firstFreeElement;
        }
        renderSubmit() {
            if (this.texture && this.texture.getIsReady()) {
                if (this.update(e.ILaya.timer._delta), this.sv.u_CurrentTime = this._currentTime, 
                this._firstNewElement != this._firstFreeElement && this.addNewParticlesToVertexBuffer(), 
                this.blend(), this._firstActiveElement != this._firstFreeElement) {
                    var t = e.WebGLContext.mainContext;
                    this._mesh.useMesh(t), this.sv.u_texture = this.texture._getSource(), this.sv.upload(), 
                    this._firstActiveElement < this._firstFreeElement ? t.drawElements(t.TRIANGLES, 6 * (this._firstFreeElement - this._firstActiveElement), t.UNSIGNED_SHORT, 6 * this._firstActiveElement * 2) : (e.WebGLContext.mainContext.drawElements(t.TRIANGLES, 6 * (this.settings.maxPartices - this._firstActiveElement), t.UNSIGNED_SHORT, 6 * this._firstActiveElement * 2), 
                    this._firstFreeElement > 0 && t.drawElements(t.TRIANGLES, 6 * this._firstFreeElement, t.UNSIGNED_SHORT, 0)), 
                    e.Stat.renderBatches++;
                }
                this._drawCounter++;
            }
            return 1;
        }
        updateParticleForNative() {
            this.texture && this.texture.getIsReady() && (this.update(e.ILaya.timer._delta), 
            this.sv.u_CurrentTime = this._currentTime, this._firstNewElement != this._firstFreeElement && (this._firstNewElement = this._firstFreeElement));
        }
        getMesh() {
            return this._mesh;
        }
        getConchMesh() {
            return this._conchMesh;
        }
        getFirstNewElement() {
            return this._firstNewElement;
        }
        getFirstFreeElement() {
            return this._firstFreeElement;
        }
        getFirstActiveElement() {
            return this._firstActiveElement;
        }
        getFirstRetiredElement() {
            return this._firstRetiredElement;
        }
        setFirstFreeElement(t) {
            this._firstFreeElement = t;
        }
        setFirstNewElement(t) {
            this._firstNewElement = t;
        }
        addDrawCounter() {
            this._drawCounter++;
        }
        blend() {
            if (e.BlendMode.activeBlendFunction !== this._blendFn) {
                var t = e.WebGLContext.mainContext;
                t.enable(t.BLEND), this._blendFn(t), e.BlendMode.activeBlendFunction = this._blendFn;
            }
        }
        dispose() {
            this._mesh.releaseMesh();
        }
    }
    m.activeBlendType = -1;
    class d {
        constructor() {
            this._frameTime = 0, this._emissionRate = 60, this._emissionTime = 0, this.minEmissionTime = 1 / 60;
        }
        set particleTemplate(t) {
            this._particleTemplate = t;
        }
        set emissionRate(t) {
            t <= 0 || (this._emissionRate = t, t > 0 && (this.minEmissionTime = 1 / t));
        }
        get emissionRate() {
            return this._emissionRate;
        }
        start(t = Number.MAX_VALUE) {
            0 != this._emissionRate && (this._emissionTime = t);
        }
        stop() {
            this._emissionTime = 0;
        }
        clear() {
            this._emissionTime = 0;
        }
        emit() {}
        advanceTime(t = 1) {
            if (this._emissionTime -= t, !(this._emissionTime < 0 || (this._frameTime += t, 
            this._frameTime < this.minEmissionTime))) for (;this._frameTime > this.minEmissionTime; ) this._frameTime -= this.minEmissionTime, 
            this.emit();
        }
    }
    class c extends d {
        constructor(t) {
            super(), this.template = t;
        }
        set template(t) {
            this._particleTemplate = t, t || (this._emitFun = null, this.setting = null, this._posRange = null), 
            this.setting = t.settings, this._posRange = this.setting.positionVariance, this._particleTemplate instanceof m && (this._emitFun = this.webGLEmit);
        }
        get template() {
            return this._particleTemplate;
        }
        emit() {
            super.emit(), null != this._emitFun && this._emitFun();
        }
        getRandom(t) {
            return (2 * Math.random() - 1) * t;
        }
        webGLEmit() {
            var t = new Float32Array(3);
            t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), 
            t[2] = this.getRandom(this._posRange[2]);
            var e = new Float32Array(3);
            e[0] = 0, e[1] = 0, e[2] = 0, this._particleTemplate.addParticleArray(t, e);
        }
        canvasEmit() {
            var t = new Float32Array(3);
            t[0] = this.getRandom(this._posRange[0]), t[1] = this.getRandom(this._posRange[1]), 
            t[2] = this.getRandom(this._posRange[2]);
            var e = new Float32Array(3);
            e[0] = 0, e[1] = 0, e[2] = 0, this._particleTemplate.addParticleArray(t, e);
        }
    }
    class _ extends e.Sprite {
        constructor(t) {
            super(), this._matrix4 = new Float32Array([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]), 
            this.autoPlay = !0, this.customRenderEnable = !0, t && this.setParticleSetting(t);
        }
        set url(t) {
            this.load(t);
        }
        load(t) {
            e.ILaya.loader.load(t, e.Handler.create(this, this.setParticleSetting), null, e.ILaya.Loader.JSON);
        }
        setParticleSetting(t) {
            if (!t) return this.stop();
            i.checkSetting(t), this.customRenderEnable = !0, this._particleTemplate = new m(t), 
            this.graphics._saveToCmd(null, e.DrawParticleCmd.create(this._particleTemplate)), 
            this._emitter ? this._emitter.template = this._particleTemplate : this._emitter = new c(this._particleTemplate), 
            this.autoPlay && (this.emitter.start(), this.play());
        }
        get emitter() {
            return this._emitter;
        }
        play() {
            e.ILaya.timer.frameLoop(1, this, this._loop);
        }
        stop() {
            e.ILaya.timer.clear(this, this._loop);
        }
        _loop() {
            this.advanceTime(1 / 60);
        }
        advanceTime(t = 1) {
            this._canvasTemplate && this._canvasTemplate.advanceTime(t), this._emitter && this._emitter.advanceTime(t);
        }
        customRender(t, e, i) {
            this._matrix4[0] = t._curMat.a, this._matrix4[1] = t._curMat.b, this._matrix4[4] = t._curMat.c, 
            this._matrix4[5] = t._curMat.d, this._matrix4[12] = t._curMat.tx, this._matrix4[13] = t._curMat.ty, 
            this._particleTemplate.sv.u_mmat = this._matrix4, this._canvasTemplate && this._canvasTemplate.render(t, e, i);
        }
        destroy(t = !0) {
            this._particleTemplate instanceof m && this._particleTemplate.dispose(), super.destroy(t);
        }
    }
    e.ILaya.regClass(_);
    t.Emitter2D = c, t.EmitterBase = d, t.Particle2D = _, t.ParticleData = a, t.ParticleEmitter = class {
        constructor(t, e, i) {
            this._timeLeftOver = 0, this._tempVelocity = new Float32Array([ 0, 0, 0 ]), this._tempPosition = new Float32Array([ 0, 0, 0 ]), 
            this._templet = t, this._timeBetweenParticles = 1 / e, this._previousPosition = i;
        }
        update(t, i) {
            if ((t /= 1e3) > 0) {
                e.MathUtil.subtractVector3(i, this._previousPosition, this._tempVelocity), e.MathUtil.scaleVector3(this._tempVelocity, 1 / t, this._tempVelocity);
                for (var r = this._timeLeftOver + t, a = -this._timeLeftOver; r > this._timeBetweenParticles; ) a += this._timeBetweenParticles, 
                r -= this._timeBetweenParticles, e.MathUtil.lerpVector3(this._previousPosition, i, a / t, this._tempPosition), 
                this._templet.addParticleArray(this._tempPosition, this._tempVelocity);
                this._timeLeftOver = r;
            }
            this._previousPosition[0] = i[0], this._previousPosition[1] = i[1], this._previousPosition[2] = i[2];
        }
    }, t.ParticleSetting = i, t.ParticleShader = l, t.ParticleShaderValue = h, t.ParticleTemplate2D = m, 
    t.ParticleTemplateBase = r, t.ParticleTemplateWebGL = s;
}(window.Laya = window.Laya || {}, Laya);