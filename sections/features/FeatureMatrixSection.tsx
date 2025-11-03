"use client"

import { motion } from 'framer-motion'
import { featureMatrix } from '@/lib/data'

export function FeatureMatrixSection() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-aurora opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-white/20 hover:shadow-lg hover:shadow-cobalt/10 transition-all"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-aurora">VerceOS Mesh</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              Intelligent agents orchestrated like symphonies
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Every VerceAgent is tuned for collaborative cognition—sharing memory, aligning to governance policies,
              and driving outcomes across your workflows.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-slate-200">
              {featureMatrix.map((group) => (
                <div key={group.category} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-lg text-white">{group.category}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-aurora" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="flex h-full flex-col justify-between gap-6"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="flex-1 rounded-4xl border border-white/10 bg-gradient-to-br from-white/5 via-cobalt/20 to-transparent p-8 backdrop-blur-xl hover:border-white/20 hover:shadow-xl hover:shadow-cobalt/15 transition-all"
            >
              <h3 className="font-display text-2xl text-white">Experience Layer</h3>
              <p className="mt-3 text-sm text-slate-300">
                Navigate Vercedo’s Mission Control—a holographic workspace with spatial analytics and live agent
                states. Pair with natural-language copilots to command automations instantly.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-slate-200">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-medium text-white">Omni-channel automations</p>
                  <p className="text-xs text-slate-400">Voice, chat, APIs, robotic hands—aligned in a unified timeline.</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-medium text-white">Predictive insight prism</p>
                  <p className="text-xs text-slate-400">Holographic analytics with causality mapping and scenario mode.</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="rounded-4xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300 backdrop-blur-xl hover:border-white/20 hover:shadow-lg hover:shadow-aurora/10 transition-all"
            >
              <p>
                <span className="text-white">Integrations:</span> Salesforce, ServiceNow, SAP, Workday, Snowflake, Slack, custom APIs, and more.
              </p>
              <p className="mt-4 text-slate-400">
                VerceAgents adapt to your context, syncing with knowledge bases, policies, and compliance frameworks.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
