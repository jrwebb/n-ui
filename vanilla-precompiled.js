{"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["n-service-worker/unregister"],depth0,{"name":"n-service-worker/unregister","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<base target=\"_parent\" href=\""
    + container.escapeExpression(((helper = (helper = helpers.setBase || (depth0 != null ? depth0.setBase : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"setBase","hash":{},"data":data}) : helper)))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "/"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.trackablePageName), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.lambda, alias5=container.escapeExpression, buffer = 
  "<!DOCTYPE html>\n"
    + ((stack1 = container.invokePartial(partials["n-ui/layout/partials/html-tag"],depth0,{"name":"n-ui/layout/partials/html-tag","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	<head>\n		<meta charset=\"utf-8\">\n		<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n		<title>";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(options={"name":"title","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.title) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</title>\n		<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n		<meta name=\"theme-color\" content=\"#fff1e0\">\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (data && data.root)) && stack1.flags)) && stack1.serviceWorker),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.setBase : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["n-ui/js-setup/templates/fire-condition"],depth0,{"name":"n-ui/js-setup/templates/fire-condition","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["n-ui/layout/partials/stylesheets"],depth0,{"name":"n-ui/layout/partials/stylesheets","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n		"
    + ((stack1 = (helpers.outputBlock || (depth0 && depth0.outputBlock) || alias2).call(alias1,"head",{"name":"outputBlock","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<script>\n"
    + ((stack1 = container.invokePartial(partials["n-ui/js-setup/templates/ctm"],depth0,{"name":"n-ui/js-setup/templates/ctm","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["n-ui/typography/enhance-fonts"],depth0,{"name":"n-ui/typography/enhance-fonts","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</script>\n	</head>\n	<body class=\"o-hoverable-on\" data-next-is-logged-in=\""
    + alias5(alias4(((stack1 = ((stack1 = (data && data.root)) && stack1.anon)) && stack1.userIsLoggedIn), depth0))
    + "\" data-trackable=\"page:"
    + alias5(alias4(((stack1 = (data && data.root)) && stack1.__name), depth0))
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (data && data.root)) && stack1.trackablePageName),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials["n-ui/js-setup/templates/bootstrapper"],depth0,{"name":"n-ui/js-setup/templates/bootstrapper","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</body>\n</html>\n";
},"usePartial":true,"useData":true}