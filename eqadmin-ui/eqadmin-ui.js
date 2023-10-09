import { openBlock as l, createElementBlock as c, createElementVNode as r } from "vue";
const a = {};
a.dealFile = function(t, e) {
  e.focus();
  let n = document.createElement("img");
  e.appendChild(n);
  let i = document.createRange();
  i.selectNodeContents(e), i.collapse(!1);
  let d = window.getSelection();
  if (d.removeAllRanges(), d.addRange(i), t.type.indexOf("image") != -1) {
    let o = new FileReader();
    o.readAsDataURL(t), o.onloadend = function() {
      n.src = o.result;
    };
  }
};
const h = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, d] of e)
    n[i] = d;
  return n;
}, m = {
  name: "eqadmin-editor",
  props: {
    width: { type: String, default: "100%" },
    height: { type: String, default: "100%" }
  },
  watch: {
    width(t) {
      this.editorWidth = this.width;
    },
    height(t) {
      this.editorHeight = this.height;
    }
  },
  data() {
    return {
      editorWidth: "100%",
      editorHeight: "100%",
      editorContent: null,
      content: {}
    };
  },
  methods: {
    getEditor() {
      return this.editorContent;
    },
    input(t) {
      this.content.text = t.target.innerText, this.content.html = t.target.innerHTML, this.$emit("eqadminEditorInput", this.content);
    }
  },
  mounted() {
    let t = this.$refs.eqadminEditorContent;
    this.editorContent = t, t.style.width = this.editorWidth, t.style.height = this.editorHeight, t.addEventListener("paste", function(e) {
      const n = (e.clipboardData || window.clipboardData).items;
      if (n && n.length)
        for (var i = 0; i < n.length; i++)
          n[i].kind == "file" && a.dealFile(n[i].getAsFile(), t);
    });
  }
  //
}, u = { class: "eqadmin-editor editor-root" }, p = { ref: "eqadmin-toolbar" };
function g(t, e, n, i, d, o) {
  return l(), c("div", u, [
    r("div", p, null, 512),
    r("div", {
      ref: "eqadminEditorContent",
      class: "editor-content",
      contenteditable: "true",
      onInput: e[0] || (e[0] = (...s) => o.input && o.input(...s))
    }, null, 544)
  ]);
}
const f = /* @__PURE__ */ h(m, [["render", g]]), _ = [f], E = {
  install(t) {
    _.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  E as default,
  f as eqadminEditor
};
