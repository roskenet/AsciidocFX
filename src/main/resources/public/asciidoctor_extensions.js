(function (a) {
    var b = a.nil, H = a.breaker, l = a.slice, p = a.module, q = a.klass, s = a.hash2, I = a.range, J = a.hash;
    return function (K) {
        (function (k) {
            k = p(k, "Extensions");
            var h = k._scope;
            (function (g, $super) {
                function e() {
                }

                var f = e = q(g, $super, "Processor", e), c = f._proto, v = f._scope, n, z, t;
                c.config = b;
                (function (a) {
                    a._proto.$config = function () {
                        var a;
                        null == this.config && (this.config = b);
                        return!1 !== (a = this.config) && a !== b ? a : this.config = s([], {})
                    };
                    a._proto.$option = function (b, a) {
                        return this.$config()["$[]="](b, a)
                    };
                    a._proto.$use_dsl = function () {
                        var a;
                        return(a = this.$name()["$nil_or_empty?"]()) === b || a._isBoolean && !0 != a ? (a = this.$constants().$grep("DSL")) === b || a._isBoolean && !0 != a ? b : this.$extend(this.$const_get("DSL")) : (a = this.$constants().$grep("DSL")) === b || a._isBoolean && !0 != a ? b : this.$include(this.$const_get("DSL"))
                    };
                    a._proto.$extend_dsl = a._proto.$use_dsl;
                    return a._proto.$include_dsl = a._proto.$use_dsl
                })(f.$singleton_class());
                f.$attr_reader("config");
                c.$initialize = function (b) {
                    null == b && (b = s([], {}));
                    return this.config = this.$class().$config().$merge(b)
                };
                c.$update_config = function (b) {
                    return this.config.$update(b)
                };
                c.$process = function (b) {
                    var f;
                    b = l.call(arguments, 0);
                    return this.$raise(null == (f = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : f)
                };
                c.$create_block = function (b, a, f, c, e) {
                    null == e && (e = s([], {}));
                    return v.Block.$new(b, a, s(["source", "attributes"], {source: f, attributes: c}).$merge(e))
                };
                c.$create_image_block = function (a, f, c) {
                    null == c && (c = s([], {}));
                    return this.$create_block(a, "image", b, f, c)
                };
                c.$create_inline = function (b, a, f, c) {
                    null == c &&
                    (c = s([], {}));
                    return v.Inline.$new(b, a, f, c)
                };
                c.$parse_content = function (a, f, c) {
                    var e, g, n = b, C = b;
                    null == c && (c = s([], {}));
                    for (n = (e = f["$is_a?"](v.Reader)) === b || e._isBoolean && !0 != e ? v.Reader.$new(f) : n; (g = n["$has_more_lines?"]()) !== b && (!g._isBoolean || !0 == g);)if (C = v.Parser.$next_block(n, a, c), !1 !== C && C !== b)a["$<<"](C);
                    return b
                };
                return(n = (z = [
                    ["create_paragraph", "create_block", "paragraph"],
                    ["create_open_block", "create_block", "open"],
                    ["create_example_block", "create_block", "example"],
                    ["create_pass_block", "create_block",
                        "pass"],
                    ["create_listing_block", "create_block", "listing"],
                    ["create_literal_block", "create_block", "literal"],
                    ["create_anchor", "create_inline", "anchor"]
                ]).$each, n._p = (t = function (a, c, f) {
                    var e = t._s || this, g, v;
                    null == a && (a = b);
                    null == c && (c = b);
                    null == f && (f = b);
                    return(g = e.$define_method, g._p = (v = function (b) {
                        var a = v._s || this, d;
                        b = l.call(arguments, 0);
                        return(d = a).$send.apply(d, [c].concat(b.$dup().$insert(1, f)))
                    }, v._s = e, v), g).call(e, a)
                }, t._s = f, t), n).call(z)
            })(k, null);
            (function (g) {
                g = p(g, "ProcessorDsl");
                var x = g._proto,
                    e;
                x.$option = function (b, a) {
                    return this.$config()["$[]="](b, a)
                };
                x.$process = e = function (f) {
                    var c, g, n = e._p || b;
                    null == this.process_block && (this.process_block = b);
                    f = l.call(arguments, 0);
                    e._p = null;
                    return n !== b ? this.process_block = n : (c = this.process_block) === b || c._isBoolean && !0 != c ? this.$raise(null == (g = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : g) : (c = this.process_block).$call.apply(c, [].concat(f))
                };
                x["$process_block_given?"] = function () {
                    var a;
                    return(a = this.process_block, null != a && a !== b) ? "instance-variable" :
                        b
                };
                a.donate(g, ["$option", "$process", "$process_block_given?"])
            })(k);
            (function (g, $super) {
                function e() {
                }

                return((e = q(g, $super, "Preprocessor", e))._proto.$process = function (b, c) {
                    var e;
                    return this.$raise(null == (e = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : e)
                }, b) && "process"
            })(k, h.Processor);
            a.casgn(h.Preprocessor, "DSL", h.ProcessorDsl);
            (function (g, $super) {
                function e() {
                }

                return((e = q(g, $super, "Treeprocessor", e))._proto.$process = function (b) {
                    var c;
                    return this.$raise(null == (c = a.Object._scope.NotImplementedError) ?
                        a.cm("NotImplementedError") : c)
                }, b) && "process"
            })(k, h.Processor);
            a.casgn(h.Treeprocessor, "DSL", h.ProcessorDsl);
            (function (g, $super) {
                function e() {
                }

                return((e = q(g, $super, "Postprocessor", e))._proto.$process = function (b, c) {
                    var e;
                    return this.$raise(null == (e = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : e)
                }, b) && "process"
            })(k, h.Processor);
            a.casgn(h.Postprocessor, "DSL", h.ProcessorDsl);
            (function (g, $super) {
                function e() {
                }

                var f = (e = q(g, $super, "IncludeProcessor", e))._proto;
                f.$process = function (b, f, e) {
                    var g;
                    return this.$raise(null == (g = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : g)
                };
                return(f["$handles?"] = function (b) {
                    return!0
                }, b) && "handles?"
            })(k, h.Processor);
            a.casgn(h.IncludeProcessor, "DSL", h.ProcessorDsl);
            (function (g, $super) {
                function e() {
                }

                var f = e = q(g, $super, "BlockProcessor", e), c = f._proto, v;
                c.config = b;
                f.$attr_accessor("name");
                c.$initialize = v = function (c, f) {
                    var e, g, h, k = b;
                    null == c && (c = b);
                    null == f && (f = s([], {}));
                    v._p = null;
                    a.find_super_dispatcher(this, "initialize", v, null).apply(this,
                        [f]);
                    this.name = !1 !== (e = c) && e !== b ? e : this.config["$[]"]("name");
                    k = this.config["$[]"]("contexts");
                    if ((null == (e = a.Object._scope.NilClass) ? a.cm("NilClass") : e)["$==="](k))e = "contexts", g = this.config, !1 !== (h = g["$[]"](e)) && h !== b ? h : g["$[]="](e, ["open", "paragraph"].$to_set()); else if ((null == (e = a.Object._scope.Symbol) ? a.cm("Symbol") : e)["$==="](k))this.config["$[]="]("contexts", [this.config["$[]"]("contexts")].$to_set()); else this.config["$[]="]("contexts", this.config["$[]"]("contexts").$to_set());
                    return e = "content_model",
                        g = this.config, !1 !== (h = g["$[]"](e)) && h !== b ? h : g["$[]="](e, "compound")
                };
                return(c.$process = function (b, c, f) {
                    var e;
                    return this.$raise(null == (e = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : e)
                }, b) && "process"
            })(k, h.Processor);
            (function (g) {
                g = p(g, "BlockProcessorDsl");
                var x = g._proto, e = g._scope;
                g.$include(e.ProcessorDsl);
                x.$named = function (a) {
                    var c;
                    return(c = this["$is_a?"](e.Processor)) === b || c._isBoolean && !0 != c ? this.$option("name", a) : this.name = a
                };
                a.defn(g, "$match_name", x.$named);
                a.defn(g, "$bind_to",
                    x.$named);
                x.$contexts = function (b) {
                    b = l.call(arguments, 0);
                    return this.$option("contexts", b.$flatten())
                };
                a.defn(g, "$on_contexts", x.$contexts);
                a.defn(g, "$on_context", x.$contexts);
                x.$content_model = function (b) {
                    return this.$option("content_model", b)
                };
                a.defn(g, "$parse_content_as", x.$content_model);
                x.$pos_attrs = function (b) {
                    b = l.call(arguments, 0);
                    return this.$option("pos_attrs", b.$flatten())
                };
                a.defn(g, "$map_attributes", x.$pos_attrs);
                a.defn(g, "$name_positional_attributes", x.$pos_attrs);
                x.$default_attrs = function (b) {
                    return this.$option("default_attrs",
                        b)
                };
                a.defn(g, "$seed_attributes_with", x.$default_attrs);
                a.donate(g, "$named $match_name $bind_to $contexts $on_contexts $on_context $content_model $parse_content_as $pos_attrs $map_attributes $name_positional_attributes $default_attrs $seed_attributes_with".split(" "))
            })(k);
            a.casgn(h.BlockProcessor, "DSL", h.BlockProcessorDsl);
            (function (g, $super) {
                function e() {
                }

                var f = e = q(g, $super, "MacroProcessor", e), c = f._proto, v;
                c.config = b;
                f.$attr_accessor("name");
                c.$initialize = v = function (c, e) {
                    var f, g, h;
                    null == c && (c = b);
                    null == e && (e = s([], {}));
                    v._p = null;
                    a.find_super_dispatcher(this, "initialize", v, null).apply(this, [e]);
                    this.name = !1 !== (f = c) && f !== b ? f : this.config["$[]"]("name");
                    return f = "content_model", g = this.config, !1 !== (h = g["$[]"](f)) && h !== b ? h : g["$[]="](f, "attributes")
                };
                return(c.$process = function (b, c, e) {
                    var f;
                    return this.$raise(null == (f = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : f)
                }, b) && "process"
            })(k, h.Processor);
            (function (g) {
                g = p(g, "MacroProcessorDsl");
                var h = g._proto, e = g._scope;
                g.$include(e.ProcessorDsl);
                h.$named = function (a) {
                    var c;
                    return(c = this["$is_a?"](e.Processor)) === b || c._isBoolean && !0 != c ? this.$option("name", a) : this.name = a
                };
                a.defn(g, "$match_name", h.$named);
                a.defn(g, "$bind_to", h.$named);
                h.$content_model = function (b) {
                    return this.$option("content_model", b)
                };
                a.defn(g, "$parse_content_as", h.$content_model);
                h.$pos_attrs = function (b) {
                    b = l.call(arguments, 0);
                    return this.$option("pos_attrs", b.$flatten())
                };
                a.defn(g, "$map_attributes", h.$pos_attrs);
                a.defn(g, "$name_positional_attributes", h.$pos_attrs);
                h.$default_attrs =
                    function (b) {
                        return this.$option("default_attrs", b)
                    };
                a.defn(g, "$seed_attributes_with", h.$default_attrs);
                a.donate(g, "$named $match_name $bind_to $content_model $parse_content_as $pos_attrs $map_attributes $name_positional_attributes $default_attrs $seed_attributes_with".split(" "))
            })(k);
            (function (a, $super) {
                function e() {
                }

                e = q(a, $super, "BlockMacroProcessor", e);
                return b
            })(k, h.MacroProcessor);
            a.casgn(h.BlockMacroProcessor, "DSL", h.MacroProcessorDsl);
            (function (g, $super) {
                function e() {
                }

                var f = (e = q(g, $super, "InlineMacroProcessor",
                    e))._proto, c;
                f.config = f.name = b;
                f.$initialize = c = function (e, f) {
                    var g = l.call(arguments, 0), h, k, q = c._p;
                    null == f && (f = s([], {}));
                    c._p = null;
                    a.find_super_dispatcher(this, "initialize", c, q).apply(this, g);
                    return h = this.config, !1 !== (k = h["$[]"]("regexp")) && k !== b ? k : h["$[]="]("regexp", this.$resolve_regexp(this.name, this.config["$[]"]("format")))
                };
                return(f.$resolve_regexp = function (b, a) {
                    return a["$=="]("short") ? new RegExp("\\\\?" + b + ":\\[((?:\\\\\\]|[^\\]])*?)\\]") : new RegExp("\\\\?" + b + ":(\\S+?)\\[((?:\\\\\\]|[^\\]])*?)\\]")
                },
                    b) && "resolve_regexp"
            })(k, h.MacroProcessor);
            (function (b) {
                b = p(b, "InlineMacroProcessorDsl");
                var h = b._proto;
                b.$include(b._scope.MacroProcessorDsl);
                h.$using_format = function (b) {
                    return this.$option("format", b)
                };
                h.$match = function (b) {
                    return this.$option("regexp", b)
                };
                a.donate(b, ["$using_format", "$match"])
            })(k);
            a.casgn(h.InlineMacroProcessor, "DSL", h.InlineMacroProcessorDsl);
            (function (a, $super) {
                function e() {
                }

                var f = e = q(a, $super, "Extension", e), c = f._proto;
                f.$attr("kind");
                f.$attr("config");
                f.$attr("instance");
                return(c.$initialize =
                    function (b, a, c) {
                        this.kind = b;
                        this.instance = a;
                        return this.config = c
                    }, b) && "initialize"
            })(k, null);
            (function (g, $super) {
                function e() {
                }

                var f = e = q(g, $super, "ProcessorExtension", e), c = f._proto, h;
                f.$attr("process_method");
                return(c.$initialize = h = function (c, e, f) {
                    var g;
                    null == f && (f = b);
                    h._p = null;
                    a.find_super_dispatcher(this, "initialize", h, null).apply(this, [c, e, e.$config()]);
                    return this.process_method = !1 !== (g = f) && g !== b ? g : e.$method("process")
                }, b) && "initialize"
            })(k, h.Extension);
            (function (g, $super) {
                function e() {
                }

                var f =
                    e = q(g, $super, "Group", e), c = f._proto;
                (function (a) {
                    var c = a._scope;
                    return(a._proto.$register = function (a) {
                        null == a && (a = b);
                        return c.Extensions.$register(a, this)
                    }, b) && "register"
                })(f.$singleton_class());
                return(c.$activate = function (b) {
                    var c;
                    return this.$raise(null == (c = a.Object._scope.NotImplementedError) ? a.cm("NotImplementedError") : c)
                }, b) && "activate"
            })(k, null);
            (function (g, $super) {
                function e() {
                }

                var f = e = q(g, $super, "Registry", e), c = f._proto, h = f._scope, n, k, t, B, p, D, E, F, G;
                c.groups = c.preprocessor_extensions = c.treeprocessor_extensions =
                    c.postprocessor_extensions = c.include_processor_extensions = c.block_extensions = c.block_macro_extensions = c.inline_macro_extensions = b;
                f.$attr_reader("document");
                f.$attr_reader("groups");
                c.$initialize = function (a) {
                    null == a && (a = s([], {}));
                    this.groups = a;
                    return this.document = this.block_extensions = this.block_macro_extensions = this.inline_macro_extensions = this.preprocessor_extensions = this.treeprocessor_extensions = this.postprocessor_extensions = this.include_processor_extensions = b
                };
                c.$activate = function (c) {
                    var e, d,
                        f;
                    this.document = c;
                    (e = (d = h.Extensions.$groups().$values()["$+"](this.groups.$values())).$each, e._p = (f = function (c) {
                        var d = f._s || this, e, g = b;
                        null == c && (c = b);
                        g = c;
                        (null == (e = a.Object._scope.Proc) ? a.cm("Proc") : e)["$==="](g) ? (g = c.$arity(), c = 0["$==="](g) || -1["$==="](g) ? (e = d.$instance_exec, e._p = c.$to_proc(), e).call(d) : 1["$==="](g) ? c.$call(d) : b) : c = (null == (e = a.Object._scope.Class) ? a.cm("Class") : e)["$==="](g) ? c.$new().$activate(d) : c.$activate(d);
                        return c
                    }, f._s = this, f), e).call(d);
                    return this
                };
                c.$preprocessor = n = function (a) {
                    var c,
                        d = n._p || b;
                    a = l.call(arguments, 0);
                    n._p = null;
                    return(c = this.$add_document_processor, c._p = d.$to_proc(), c).call(this, "preprocessor", a)
                };
                c["$preprocessors?"] = function () {
                    return this.preprocessor_extensions["$!"]()["$!"]()
                };
                c.$preprocessors = function () {
                    return this.preprocessor_extensions
                };
                c.$treeprocessor = k = function (a) {
                    var c, d = k._p || b;
                    a = l.call(arguments, 0);
                    k._p = null;
                    return(c = this.$add_document_processor, c._p = d.$to_proc(), c).call(this, "treeprocessor", a)
                };
                c["$treeprocessors?"] = function () {
                    return this.treeprocessor_extensions["$!"]()["$!"]()
                };
                c.$treeprocessors = function () {
                    return this.treeprocessor_extensions
                };
                c.$postprocessor = t = function (a) {
                    var c, d = t._p || b;
                    a = l.call(arguments, 0);
                    t._p = null;
                    return(c = this.$add_document_processor, c._p = d.$to_proc(), c).call(this, "postprocessor", a)
                };
                c["$postprocessors?"] = function () {
                    return this.postprocessor_extensions["$!"]()["$!"]()
                };
                c.$postprocessors = function () {
                    return this.postprocessor_extensions
                };
                c.$include_processor = B = function (a) {
                    var c, d = B._p || b;
                    a = l.call(arguments, 0);
                    B._p = null;
                    return(c = this.$add_document_processor,
                        c._p = d.$to_proc(), c).call(this, "include_processor", a)
                };
                c["$include_processors?"] = function () {
                    return this.include_processor_extensions["$!"]()["$!"]()
                };
                c.$include_processors = function () {
                    return this.include_processor_extensions
                };
                c.$block = p = function (a) {
                    var c, d = p._p || b;
                    a = l.call(arguments, 0);
                    p._p = null;
                    return(c = this.$add_syntax_processor, c._p = d.$to_proc(), c).call(this, "block", a)
                };
                c["$blocks?"] = function () {
                    return this.block_extensions["$!"]()["$!"]()
                };
                c["$registered_for_block?"] = function (a, c) {
                    var d, e = b;
                    return(d =
                        e = this.block_extensions["$[]"](a.$to_sym())) === b || d._isBoolean && !0 != d ? !1 : (d = e.$config()["$[]"]("contexts")["$include?"](c)) === b || d._isBoolean && !0 != d ? !1 : e
                };
                c.$find_block_extension = function (b) {
                    return this.block_extensions["$[]"](b.$to_sym())
                };
                c.$block_macro = D = function (a) {
                    var c, d = D._p || b;
                    a = l.call(arguments, 0);
                    D._p = null;
                    return(c = this.$add_syntax_processor, c._p = d.$to_proc(), c).call(this, "block_macro", a)
                };
                c["$block_macros?"] = function () {
                    return this.block_macro_extensions["$!"]()["$!"]()
                };
                c["$registered_for_block_macro?"] =
                    function (a) {
                        var c, d = b;
                        return(c = d = this.block_macro_extensions["$[]"](a.$to_sym())) === b || c._isBoolean && !0 != c ? !1 : d
                    };
                c.$find_block_macro_extension = function (b) {
                    return this.block_macro_extensions["$[]"](b.$to_sym())
                };
                c.$inline_macro = E = function (a) {
                    var c, d = E._p || b;
                    a = l.call(arguments, 0);
                    E._p = null;
                    return(c = this.$add_syntax_processor, c._p = d.$to_proc(), c).call(this, "inline_macro", a)
                };
                c["$inline_macros?"] = function () {
                    return this.inline_macro_extensions["$!"]()["$!"]()
                };
                c["$registered_for_inline_macro?"] = function (a) {
                    var c,
                        d = b;
                    return(c = d = this.inline_macro_extensions["$[]"](a.$to_sym())) === b || c._isBoolean && !0 != c ? !1 : d
                };
                c.$find_inline_macro_extension = function (b) {
                    return this.inline_macro_extensions["$[]"](b.$to_sym())
                };
                c.$inline_macros = function () {
                    return this.inline_macro_extensions.$values()
                };
                f.$private();
                c.$add_document_processor = F = function (c, e) {
                    var d, f, g, k, n, A, z, l = this, q = F._p || b, w = b, y = b, s = b, r = b, p = y = b, m = b, u = b, t = b;
                    F._p = null;
                    w = c.$to_s().$tr("_", " ");
                    y = (d = (f = w.$split(" ")).$map, d._p = (g = function (a) {
                        null == a && (a = b);
                        return"" +
                            a.$chr().$upcase() + a["$[]"](I(1, -1, !1))
                    }, g._s = l, g), d).call(f).$join().$to_sym();
                    s = h.Extensions.$const_get(y);
                    r = (d = null == a.Object._scope.AsciidoctorJ ? b : "constant") === b || d._isBoolean && !0 != d ? b : (null == (d = a.Object._scope.AsciidoctorJ) ? a.cm("AsciidoctorJ") : d)._scope.Extensions.$const_get(y);
                    y = !1 !== (d = l.$instance_variable_get(("@" + c + "_extensions").$to_sym())) && d !== b ? d : l.$instance_variable_set(("@" + c + "_extensions").$to_sym(), []);
                    p = function () {
                        if (q !== b)return m = l.$resolve_args(e, 1), u = s.$new(m), u.$singleton_class().$include_dsl(),
                            (d = (k = u).$instance_exec, d._p = q.$to_proc(), d).call(k), u.$freeze(), ((d = u["$process_block_given?"]()) === b || d._isBoolean && !0 != d) && l.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("No block specified to process " + w + " extension at " + q.$source_location())), h.ProcessorExtension.$new(c, u);
                        d = a.to_ary(l.$resolve_args(e, 2));
                        u = null == d[0] ? b : d[0];
                        m = null == d[1] ? b : d[1];
                        if ((d = !1 !== (n = u["$is_a?"](null == (A = a.Object._scope.Class) ? a.cm("Class") : A)) && n !== b ? n : (A = u["$is_a?"](null == (z = a.Object._scope.String) ?
                            a.cm("String") : z), !1 !== A && A !== b ? u = h.Extensions.$class_for_name(u) : A)) === b || d._isBoolean && !0 != d) {
                            if ((d = !1 !== (n = u["$is_a?"](s)) && n !== b ? n : (A = !1 !== r && r !== b) ? u["$is_a?"](r) : A) === b || d._isBoolean && !0 != d)return l.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("Invalid arguments specified for registering " + w + " extension: " + e));
                            u.$update_config(m);
                            u.$freeze();
                            return h.ProcessorExtension.$new(c, u)
                        }
                        ((d = !1 !== (n = u["$<"](s)) && n !== b ? n : (A = !1 !== r && r !== b) ? u["$<"](r) : A) === b || d._isBoolean &&
                            !0 != d) && l.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("Invalid type for " + w + " extension: " + u));
                        t = u.$new(m);
                        t.$freeze();
                        return h.ProcessorExtension.$new(c, t)
                    }();
                    return p.$config()["$[]"]("position")["$=="](">>") ? y.$unshift(p) : y["$<<"](p)
                };
                c.$add_syntax_processor = G = function (c, e) {
                    var d, f, g, n, k, l, q, z = G._p || b, p = b, w = b, y = b, t = w = b, r = y = b, B = b, m = b, w = b;
                    G._p = null;
                    p = c.$to_s().$tr("_", " ");
                    w = (d = (f = p.$split(" ")).$map, d._p = (g = function (a) {
                        null == a && (a = b);
                        return"" + a.$chr().$upcase() +
                            a["$[]"](I(1, -1, !1))
                    }, g._s = this, g), d).call(f).$join();
                    y = ("" + w + "Processor").$to_sym();
                    w = h.Extensions.$const_get(y);
                    t = (d = null == a.Object._scope.AsciidoctorJ ? b : "constant") === b || d._isBoolean && !0 != d ? b : (null == (d = a.Object._scope.AsciidoctorJ) ? a.cm("AsciidoctorJ") : d)._scope.Extensions.$const_get(y);
                    y = !1 !== (d = this.$instance_variable_get(("@" + c + "_extensions").$to_sym())) && d !== b ? d : this.$instance_variable_set(("@" + c + "_extensions").$to_sym(), s([], {}));
                    if (z !== b) {
                        d = a.to_ary(this.$resolve_args(e, 2));
                        r = null == d[0] ?
                            b : d[0];
                        B = null == d[1] ? b : d[1];
                        m = w.$new(this.$as_symbol(r), B);
                        (function (b) {
                            return b.$include_dsl()
                        })(m.$singleton_class());
                        if (z.$arity()["$=="](1)) {
                            if (a.$yield1(z, m) === H)return H.$v
                        } else(d = (n = m).$instance_exec, d._p = z.$to_proc(), d).call(n);
                        ((d = r = this.$as_symbol(m.$name())) === b || d._isBoolean && !0 != d) && this.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("No name specified for " + p + " extension at " + z.$source_location()));
                        ((d = m["$process_block_given?"]()) === b || d._isBoolean && !0 !=
                            d) && this.$raise((null == (d = a.Object._scope.NoMethodError) ? a.cm("NoMethodError") : d).$new("No block specified to process " + p + " extension at " + z.$source_location()));
                        m.$freeze();
                        return y["$[]="](r, h.ProcessorExtension.$new(c, m))
                    }
                    d = a.to_ary(this.$resolve_args(e, 3));
                    m = null == d[0] ? b : d[0];
                    r = null == d[1] ? b : d[1];
                    B = null == d[2] ? b : d[2];
                    if ((d = !1 !== (k = m["$is_a?"](null == (l = a.Object._scope.Class) ? a.cm("Class") : l)) && k !== b ? k : (l = m["$is_a?"](null == (q = a.Object._scope.String) ? a.cm("String") : q), !1 !== l && l !== b ? m = h.Extensions.$class_for_name(m) :
                        l)) === b || d._isBoolean && !0 != d) {
                        if ((d = !1 !== (k = m["$is_a?"](w)) && k !== b ? k : (l = !1 !== t && t !== b) ? m["$is_a?"](t) : l) === b || d._isBoolean && !0 != d)return this.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("Invalid arguments specified for registering " + p + " extension: " + e));
                        m.$update_config(B);
                        ((d = r = !1 !== r && r !== b ? m["$name="](this.$as_symbol(r)) : this.$as_symbol(m.$name())) === b || d._isBoolean && !0 != d) && this.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("No name specified for " +
                            p + " extension: " + m));
                        m.$freeze();
                        return y["$[]="](r, h.ProcessorExtension.$new(c, m))
                    }
                    ((d = !1 !== (k = m["$<"](w)) && k !== b ? k : (l = !1 !== t && t !== b) ? m["$<"](t) : l) === b || d._isBoolean && !0 != d) && this.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("Class specified for " + p + " extension does not inherit from " + w + ": " + m));
                    w = m.$new(this.$as_symbol(r), B);
                    ((d = r = this.$as_symbol(w.$name())) === b || d._isBoolean && !0 != d) && this.$raise((null == (d = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : d).$new("No name specified for " +
                        p + " extension: " + m));
                    m.$freeze();
                    return y["$[]="](r, h.ProcessorExtension.$new(c, w))
                };
                c.$resolve_args = function (c, e) {
                    var d, f, g = b, h = b, k = b, g = (d = c["$[]"](-1)["$is_a?"](null == (f = a.Object._scope.Hash) ? a.cm("Hash") : f)) === b || d._isBoolean && !0 != d ? s([], {}) : c.$pop();
                    if (e["$=="](1))return g;
                    h = c.$size();
                    (k = e["$-"](1)["$-"](h))["$>"](0) ? c.$fill(b, h, k) : k["$<"](0) && c.$pop(k["$-@"]());
                    c["$<<"](g);
                    return c
                };
                return(c.$as_symbol = function (c) {
                    var e, d;
                    return!1 !== c && c !== b ? (e = c["$is_a?"](null == (d = a.Object._scope.Symbol) ? a.cm("Symbol") :
                        d)) === b || e._isBoolean && !0 != e ? c.$to_sym() : c : b
                }, b) && "as_symbol"
            })(k, null);
            (function (g) {
                var h = g._scope;
                g._proto.$generate_name = function () {
                    return"extgrp" + this.$next_auto_id()
                };
                g._proto.$next_auto_id = function () {
                    var a;
                    null == this.auto_id && (this.auto_id = b);
                    !1 !== (a = this.auto_id) && a !== b ? a : this.auto_id = -1;
                    return this.auto_id = this.auto_id["$+"](1)
                };
                g._proto.$groups = function () {
                    var a;
                    null == this.groups && (this.groups = b);
                    return!1 !== (a = this.groups) && a !== b ? a : this.groups = s([], {})
                };
                g._proto.$build_registry = TMP_20 = function (a) {
                    var f,
                        c = TMP_20._p || b;
                    null == a && (a = b);
                    TMP_20._p = null;
                    return c !== b ? (!1 !== (f = a) && f !== b ? f : a = this.$generate_name(), h.Registry.$new(J(a, c))) : h.Registry.$new()
                };
                g._proto.$register = TMP_21 = function (e) {
                    var f, c = TMP_21._p || b, g = b, h = b, k = h = b, k = b;
                    e = l.call(arguments, 0);
                    TMP_21._p = null;
                    g = e.$length();
                    c === b && ((f = (h = e.$pop())["$!"]()) === b || f._isBoolean && !0 != f ? (k = h, c = (null == (f = a.Object._scope.Class) ? a.cm("Class") : f)["$==="](k) ? h : (null == (f = a.Object._scope.String) ? a.cm("String") : f)["$==="](k) ? this.$class_for_name(h) : (null == (f = a.Object._scope.Symbol) ?
                        a.cm("Symbol") : f)["$==="](k) ? this.$class_for_name(h.$to_s()) : h) : c = this.$raise((null == (f = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : f).$new("Extension group to register not specified")));
                    h = c;
                    k = !1 !== (f = e.$pop()) && f !== b ? f : this.$generate_name();
                    ((f = e["$empty?"]()) === b || f._isBoolean && !0 != f) && this.$raise((null == (f = a.Object._scope.ArgumentError) ? a.cm("ArgumentError") : f).$new("Wrong number of arguments (" + g + " for 1..2)"));
                    return this.$groups()["$[]="](k, h)
                };
                g._proto.$unregister_all = function () {
                    return this.groups =
                        s([], {})
                };
                g._proto.$resolve_class = function (e) {
                    var f, c;
                    return(f = e["$is_a?"](null == (c = a.Object._scope.Class) ? a.cm("Class") : c)) === b || f._isBoolean && !0 != f ? this.$class_for_name(e.$to_s()) : e
                };
                return(g._proto.$class_for_name = function (e) {
                    var f, c, g, h = b, h = null == (f = a.Object._scope.Object) ? a.cm("Object") : f;
                    (f = (c = e.$split("::")).$each, f._p = (g = function (a) {
                        var c = g._s || this, f;
                        null == a && (a = b);
                        return(f = a["$empty?"]()) === b || f._isBoolean && !0 != f ? (f = h["$const_defined?"](a)) === b || f._isBoolean && !0 != f ? c.$raise("Could not resolve class for name: " +
                            e) : h = h.$const_get(a) : b
                    }, g._s = this, g), f).call(c);
                    return h
                }, b) && "class_for_name"
            })(k.$singleton_class())
        })(p(K, "Asciidoctor"))
    }(a.top)
})(Opal);