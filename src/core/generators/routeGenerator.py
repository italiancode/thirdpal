import os

# Configuration
root_folder = "."  # Change this to the appropriate root folder of your project
pages_folder = "C:\\Users\\chasefi\\Desktop\\TokenMama\\tokenmama-frontend\\src\\pages"

route_template = """
${path}.path, () =>
  this.renderer.x_renderPage(${path}.path, ${path}.name, ${path}.component),
"""

config_template = """
  ${name}: {
    path: "/${name}",
    name: "${name}",
    component: ${component},
    meta: { title: "", description: "" },
  },
"""


def generate_route(path, name, component):
    route_code = route_template.replace("${path}", path).replace(
        "${name}", name).replace("${component}", component)
    return route_code


def generate_route_config(path, name, component):
    route_config = config_template.replace("${path}", path).replace(
        "${name}", name).replace("${component}", component)
    return route_config


def generate_routes(pages_folder):
    route_configs = []
    route_config_configs = []
    import_statements = []  # To store import statements for page components

    for page_file in os.listdir(pages_folder):
        if page_file.endswith(".js") and not page_file.startswith("_"):
            page_name = os.path.splitext(page_file)[0]
            path = f'page_config.{page_name.lower()}'
            route_configs.append(generate_route(
                path, page_name, page_name))
            route_config_configs.append(
                generate_route_config(path, page_name.lower(), page_name))

            # Generate import statement for the page component
            import_statement = f"import {page_name} from '../pages/{page_file}'"
            import_statements.append(import_statement)

    return route_configs, route_config_configs, import_statements


def update_routes_js(route_configs, route_config_configs, import_statements):
    routes_file_path = "C:\\Users\chasefi\\Desktop\\TokenMama\\tokenmama-frontend\\\src\\core\\routes.js"
    with open(routes_file_path, "r") as file:
        content = file.read()

    # Remove existing route configurations
    content = content.split('// Define your routes and start the router')[0]

    # Add new route configurations
    new_route_configs = "\n".join(route_configs)
    new_route_config_configs = "\n".join(route_config_configs)

    import_statements_str = "\n".join(import_statements)
    config_content = (
        import_statements_str +
        "\n\n// route page config\nexport const page_config = {\n" +
        "\n" + new_route_config_configs + "\n};"
    )

    content += (
        "\n\n" + config_content +
        "\n\n" "\n\n// route page config\nexport const pages = [\n" +
        "\n" + new_route_configs + "\n];"
    )

    with open(routes_file_path, "w") as file:
        file.write(content)


def main():
    route_configs, route_config_configs, import_statements = generate_routes(
        pages_folder)
    update_routes_js(route_configs, route_config_configs, import_statements)
    print("Route configurations generated and added to routes.js.")


if __name__ == "__main__":
    main()
