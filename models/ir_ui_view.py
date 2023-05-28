from odoo import fields, models


class View(models.Model):
    _inherit = "ir.ui.view"

    type = fields.Selection(selection_add=[
        ("owl_test", "Vue OWL Test"),
        ("owl_graph", "Vue OWL Graph"),
        ("dhtmlx_gantt", "Vue OWL Dhtmlx Gantt"),
    ])
    #type = fields.Selection(selection_add=[("owl_graph", "Test Vue OWL Graph")])
